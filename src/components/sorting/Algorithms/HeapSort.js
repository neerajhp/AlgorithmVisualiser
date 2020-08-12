// create max heap
function heapify(array, i, length, pointer) {
  let left = 2 * i + 1,
    right = 2 * i + 2,
    max = i;

  pointer.push([[...array], i, left]);
  if (left < length && array[left] > array[max]) {
    max = left;
  }

  pointer.push([[...array], i, right]);
  if (right < length && array[right] > array[max]) {
    max = right;
  }

  if (max !== i) {
    let tmp = array[i];
    array[i] = array[max];
    array[max] = tmp;
    pointer.push([[...array], i, '']);
    heapify(array, max, length, pointer);
  }
}

function HeapSort(array) {
  let tmpArray = [...array[0][0]];
  let length = tmpArray.length;

  for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
    heapify(tmpArray, i, length, array);
  }

  for (let i = length - 1; i > 0; i--) {
    let tmp = tmpArray[0];

    tmpArray[0] = tmpArray[i];
    tmpArray[i] = tmp;
    length--;

    heapify(tmpArray, 0, i, array);
  }
}

export default HeapSort;
