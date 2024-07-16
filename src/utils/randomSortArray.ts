const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const randomSortArray = <T>(array: Array<T>, iterations = 100): Array<T> => {
  const newArray = [...array];

  for (let i = 0; i < iterations; i++) {
    const a = randomIntFromInterval(0, newArray.length);
    const b = randomIntFromInterval(0, newArray.length);

    const tmp = newArray[a];
    newArray[a] = newArray[b];
    newArray[b] = tmp;
  }

  return newArray;
};

export default randomSortArray;
