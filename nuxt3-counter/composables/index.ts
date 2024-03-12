export const useCounter = () => {
  const counter = useState<number>('counter', () => 0);
  const addCounter = (counter: Ref<number>) => () => {
    counter.value++;
  };
  const minusCounter = (counter: Ref<number>) => (value: number) => {
    if (value > 0) counter.value--;
  };
  const resetCounter = (counter: Ref<number>) => () => {
    counter.value = 0;
  };
  return {
    counter: readonly(counter),
    addCounter: addCounter(counter),
    minusCounter: minusCounter(counter),
    resetCounter: resetCounter(counter),
  };
};
