export type NumberState = { [key:string]:number };

const getCountState = (state:NumberState) => {
  const entries = Object.entries(state);

  const output = entries
    .sort(([, a], [, b]) => b - a)
    .map(([label, count]) => `${label}:${count}`)
    .join(', ');

  return output;
};

export default getCountState;
