function RandArray(size) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
}

export default RandArray;
