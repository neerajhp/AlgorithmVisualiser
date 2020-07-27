import SelectionSort from './SelectionSort';
import MergeSort from './MergeSort';
import InsertionSort from './InsertionSort';

export const SortingAlgorithms = [
  {
    name: 'selectionsort',
    label: 'Selection Sort',
    stateList: [],
    func: SelectionSort,
  },
  {
    name: 'mergesort',
    label: 'Merge Sort',
    stateList: [],
    func: MergeSort,
  },
  {
    name: 'insertionsort',
    label: 'Insertion Sort',
    stateList: [],
    func: InsertionSort,
  },
  {
    name: 'quicksort',
    label: 'Quick Sort',
    stateList: [],
    func: SelectionSort,
  },
  {
    name: 'binarysort',
    label: 'Binary Sort',
    stateList: [],
    func: SelectionSort,
  },
  {
    name: 'heapsort',
    label: 'Heap Sort',
    stateList: [],
    func: SelectionSort,
  },
  {
    name: 'bubblesort',
    label: 'Bubble Sort',
    stateList: [],
    func: SelectionSort,
  },
];

export default SortingAlgorithms;
