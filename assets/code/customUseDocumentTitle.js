const useDocumentTitle = title => {
  useEffect(() => {
    document.title = title;
  });
}

export const CustomUseDocumentTitle = () => {
  const name = useFormInput('Dan');
  useDocumentTitle(name.value);
  return (<input {...name} />);
};