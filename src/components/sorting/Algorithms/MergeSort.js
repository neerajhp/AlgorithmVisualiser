const merge = (leftInd, rightInd, length, isOdd, pointer) => {
  // Get last state from state list
  let tmpArray = [...pointer[pointer.length - 1][0]],
    i = 0,
    j = 0,
    leftArrayEnd = length + isOdd,
    rightArrayEnd = length;
  // Iterate through left and right arrays
  while (i < leftArrayEnd && j < rightArrayEnd) {
    if (tmpArray[leftInd + i] > tmpArray[rightInd + j]) {
      let tmp = tmpArray[rightInd + j];
      let k = j;
      //Shift section of left array to right
      while (rightInd + k > leftInd + i) {
        tmpArray[rightInd + k] = tmpArray[rightInd + k - 1];
        k--;
      }
      tmpArray[leftInd + i] = tmp;
      pointer.push([[...tmpArray], leftInd + i, rightInd + j]);
      j++;
      leftArrayEnd++;
    } else {
      pointer.push([[...tmpArray], leftInd + i, rightInd + j]);
      i++;
    }
  }
};

function mergeSortHelper(startIndex, length, pointer) {
  // Smallest partition
  if (length <= 1) {
    return startIndex;
  }
  // Handle odd interval sizes
  let isOdd = length % 2 === 1 ? 1 : 0;

  let mid = Math.floor(length / 2),
    left = mergeSortHelper(startIndex, mid + isOdd, pointer),
    right = mergeSortHelper(startIndex + mid + isOdd, mid, pointer);

  merge(left, right, mid, isOdd, pointer);
  return startIndex;
}

// Called by Application
function MergeSort(array) {
  // Copy array
  let tmpArray = [...array[0][0]];
  let length = tmpArray.length;
  // Call Merge sort algorithm
  mergeSortHelper(0, length, array);
}

export default MergeSort;
