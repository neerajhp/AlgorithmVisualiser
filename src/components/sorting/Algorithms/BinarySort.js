function BinarySearch(startInd, endInd, keyInd, pointer) {
  let tmpArray = [...pointer.pop()[0]];

  let mid = Math.floor((startInd + endInd) / 2);
  pointer.push([[...tmpArray], keyInd, mid]);

  if (endInd <= startInd) {
    return tmpArray[keyInd] >= tmpArray[startInd] ? startInd + 1 : startInd;
  }

  if (tmpArray[keyInd] === tmpArray[mid]) return mid + 1;
  if (tmpArray[keyInd] > tmpArray[mid]) {
    return BinarySearch(mid + 1, endInd, keyInd, pointer);
  }
  return BinarySearch(startInd, mid - 1, keyInd, pointer);
}

function BinarySort(array) {
  // Get array from state list
  let tmpArray = [...array[0][0]];
  let length = tmpArray.length;

  // Perform insertion sort
  for (let key = 1; key < length; key++) {
    let tmp = tmpArray[key];
    let j = key - 1;
    //Perform Binary search
    let index = BinarySearch(0, j, key, array);

    //Shift array right
    while (j >= index) {
      tmpArray[j + 1] = tmpArray[j];
      j--;
    }
    tmpArray[j + 1] = tmp;
    array.push([[...tmpArray], key, index]);
  }
}

export default BinarySort;
