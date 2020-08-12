import './SidebarAccordion.css';
import React from 'react';
import SortingAlgorithms from './sorting/Algorithms/AlgorithmList';
import PathfinderAlgorithms from './pathfinding/Algorithms/AlgorithmList';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

const Accordion = withStyles({
  root: {
    background: 'transparent',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    fontFamily: 'Monofett, cursive',
    fontSize: '1.5em',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: 1,
    minHeight: 0,
    '&$expanded': {
      minHeight: 0,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function SidebarAccordion({
  canvasState,
  updateType,
  updateSort,
  updatePathfinder,
}) {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        square
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
          <div onClick={() => updateType('sorting')}>
            {' '}
            show me <br />
            Sorting Algorithms{' '}
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className='ui list'>
            {SortingAlgorithms.map((alg) => (
              <React.Fragment key={alg.name}>
                <input
                  type='radio'
                  name='sorting-algorithms'
                  id={alg.name}
                  checked={alg === canvasState.sortingAlg}
                  onChange={(e) => updateSort(alg)}
                />
                <label htmlFor={alg.name}>{alg.label}</label>
                <br />
              </React.Fragment>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary aria-controls='panel2d-content' id='panel2d-header'>
          <div onClick={() => updateType('pathfinding')}>
            show me <br />
            Pathfinding Algorithms
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className='pathfinding-info'>
            <div className='ui list'>
              {PathfinderAlgorithms.map((alg) => (
                <React.Fragment key={alg.name}>
                  <input
                    type='radio'
                    name='pathfinding-algorithms'
                    id={alg.name}
                    checked={alg === canvasState.pfAlg}
                    onChange={(e) => updatePathfinder(alg)}
                  />
                  <label htmlFor={alg.name}>{alg.label}</label>
                  <br />
                </React.Fragment>
              ))}
            </div>

            <div className='ui list nodes'>
              <li>
                <input type='button' name='origin' className='origin' />
                <label htmlFor='origin'>Origin</label>
              </li>
              <li>
                <input
                  type='button'
                  name='destination'
                  className='destination'
                />
                <label htmlFor='destination'>Destination</label>
              </li>
              <li>
                <input type='button' name='Obstacle' className='obstacle' />
                <label htmlFor='Obstacle'>Obstacle</label>
              </li>
              <li>
                <input type='button' name='Visited' className='visited' />
                <label htmlFor='Visited'>Visited</label>
              </li>
              <li>
                <input type='button' name='Queued' className='queued' />
                <label htmlFor='Queued'>Queued</label>
              </li>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
