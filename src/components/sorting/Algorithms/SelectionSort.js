function SelectionSort(array, updateGraph) {
  let tmpArray = array;
  let len = tmpArray.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (tmpArray[min] > tmpArray[j]) {
        //Animation
        min = j;
      }
    }
    if (min !== i) {
      tmpArray = updateGraph(min, i);
    }
  }
}

export default SelectionSort;
