import SelectionSort from './SelectionSort';

export const SortingAlgorithms = [
  {
    name: 'selectionsort',
    label: 'Selection Sort',
    checked: true,
    func: function (a, b) {
      SelectionSort(a, b);
    },
  },
  {
    name: 'mergesort',
    label: 'Merge Sort',
    checked: false,
    func: function (a, b) {
      console.log('Run merge sort');
    },
  },
  {
    name: 'insertionsort',
    label: 'Insertion Sort',
    checked: false,
    func: function (a, b) {
      console.log('Run insertion sort');
    },
  },
  {
    name: 'quicksort',
    label: 'Quick Sort',
    checked: false,
    func: function (a, b) {
      console.log('Run quick sort');
    },
  },
  {
    name: 'binarysort',
    label: 'Binary Sort',
    checked: false,
    func: function (a, b) {
      console.log('Run binary sort');
    },
  },
  {
    name: 'heapsort',
    label: 'Heap Sort',
    checked: false,
    func: function (a, b) {
      console.log('Run heap sort');
    },
  },
  {
    name: 'bubblesort',
    label: 'Bubble Sort',
    checked: false,
    func: function (a, b) {
      console.log('Run bubble sort');
    },
  },
];

export default SortingAlgorithms;
