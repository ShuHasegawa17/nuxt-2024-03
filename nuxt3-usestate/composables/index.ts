export const useTitle = () => {
  const title = useState<string>('title', () => 'Hello world!!');
  const changeTitle = (title: Ref<string>) => (value: string) => {
    title.value = value;
  };
  return {
    title: readonly(title),
    changeTitle: changeTitle(title),
  };
};
