function InsertionSort(array) {
  // Get array from state list
  let tmpArray = [...array[0][0]];
  let length = tmpArray.length;
  // Perform insertion sort
  for (let i = 1; i < length; i++) {
    let key = tmpArray[i];
    let j = i - 1;
    while (j >= 0 && tmpArray[j] > key) {
      tmpArray[j + 1] = tmpArray[j];
      j = j - 1;
      // Update state list
      array.push([[...tmpArray], i, j]);
    }
    tmpArray[j + 1] = key;
    // Update state list
    array.push([[...tmpArray], i, j]);
  }
}

export default InsertionSort;
