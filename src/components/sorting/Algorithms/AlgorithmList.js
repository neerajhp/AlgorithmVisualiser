import SelectionSort from './SelectionSort';

const SortingAlgorithms = [
  {
    name: 'selectionsort',
    label: 'Selection Sort',
    checked: true,
    func: () => SelectionSort,
  },
  {
    name: 'mergesort',
    label: 'Merge Sort',
    checked: false,
  },
  {
    name: 'insertionsort',
    label: 'Insertion Sort',
    checked: false,
  },
  {
    name: 'quicksort',
    label: 'Quick Sort',
    checked: false,
  },
  {
    name: 'binarysort',
    label: 'Binary Sort',
    checked: false,
  },
  {
    name: 'heapsort',
    label: 'Heap Sort',
    checked: false,
  },
  {
    name: 'bubblesort',
    label: 'Bubble Sort',
    checked: false,
  },
];

export default SortingAlgorithms;
