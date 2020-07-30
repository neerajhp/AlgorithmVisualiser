function partition(array, left, right, pointer) {
  let pivot = array[right],
    i = left - 1;

  for (let j = left; j <= right - 1; j++) {
    pointer.push([[...array], right, j]);
    if (array[j] < pivot) {
      i++;

      pointer.push([[...array], i, j]);
      let tmp = array[i];
      array[i] = array[j];
      array[j] = tmp;
      pointer.push([[...array], i, j]);
    }
  }

  i++;
  pointer.push([[...array], i, right]);
  let tmp = array[i];
  array[i] = array[right];
  array[right] = tmp;

  pointer.push([[...array], i, right]);
  return i;
}

function quickSortHelper(array, left, right, pointer) {
  var index;

  if (left < right) {
    index = partition(array, left, right, pointer);

    quickSortHelper(array, left, index - 1, pointer);
    quickSortHelper(array, index + 1, right, pointer);
  }
}

function QuickSort(array) {
  let tmpArray = [...array[0][0]];

  quickSortHelper(tmpArray, 0, tmpArray.length - 1, array);
}

export default QuickSort;
