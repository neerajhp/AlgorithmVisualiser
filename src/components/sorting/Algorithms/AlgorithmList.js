import SelectionSort from './SelectionSort';
import MergeSort from './MergeSort';
import InsertionSort from './InsertionSort';
import HeapSort from './HeapSort';
import QuickSort from './QuickSort';
import BinarySort from './BinarySort';

export const SortingAlgorithms = [
  {
    name: 'selectionsort',
    label: 'Selection Sort',
    stateList: [],
    perf: '',
    func: SelectionSort,
  },
  {
    name: 'mergesort',
    label: 'Merge Sort',
    stateList: [],
    perf: '',
    func: MergeSort,
  },
  {
    name: 'insertionsort',
    label: 'Insertion Sort',
    stateList: [],
    perf: '',
    func: InsertionSort,
  },
  {
    name: 'quicksort',
    label: 'Quick Sort',
    stateList: [],
    perf: '',
    func: QuickSort,
  },
  {
    name: 'binarysort',
    label: 'Binary Sort',
    stateList: [],
    perf: '',
    func: BinarySort,
  },
  {
    name: 'heapsort',
    label: 'Heap Sort',
    stateList: [],
    perf: '',
    func: HeapSort,
  },
  // {
  //   name: 'timsort',
  //   label: 'Tim Sort',
  //   stateList: [],
  //   func: SelectionSort,
  // },
];

export default SortingAlgorithms;
