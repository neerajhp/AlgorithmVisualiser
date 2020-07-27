const merge = (leftInd, rightInd, length, pointer) => {
  // Get last state from state list
  let tmpArray = [...pointer.pop()[0]];
  let j = 0;

  // Iterate through left array
  for (let i = 0; i <= length; i++) {
    pointer.push([[...tmpArray], leftInd + i, rightInd + j]);
    if (tmpArray[leftInd + i] > tmpArray[rightInd + j]) {
      let tmp = tmpArray[rightInd + j];
      // Copy section of left array
      let shift = tmpArray.slice(leftInd + i, rightInd + j);
      // Shift right by one
      tmpArray.splice(leftInd + i + 1, shift.length, ...shift);
      // Swap values
      tmpArray[leftInd + i] = tmp;
      //Handle overflow of left array
      if (shift.length > length - i) {
        length++;
      }
      // Check if j index still in right array and increment
      if (j <= length) j++;
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

  merge(left, right, mid + isOdd, pointer);
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
