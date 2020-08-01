const MAX = 100;
const MIN = 20;

function RandArray(size) {
  return Array.from({ length: size }, () =>
    Math.floor(Math.random() * (MAX - MIN) + MIN)
  );
}

export default RandArray;
