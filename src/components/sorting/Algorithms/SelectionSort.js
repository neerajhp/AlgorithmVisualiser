function SelectionSort(array) {
  // Get array from state list
  let tmpArray = [...array[0][0]];
  let len = tmpArray.length;
  let i, j;
  for (i = 0; i < len; i++) {
    let min = i;
    for (j = i + 1; j < len; j++) {
      if (tmpArray[min] > tmpArray[j]) {
        min = j;
      }
      // Update state list
      array.push([[...tmpArray], i, j]);
    }

    if (min !== i) {
      // Perform swap
      let tmp = tmpArray[i];
      tmpArray[i] = tmpArray[min];
      tmpArray[min] = tmp;
      // Update state list
      array.push([[...tmpArray], i, min]);
    }
  }
}

export default SelectionSort;
