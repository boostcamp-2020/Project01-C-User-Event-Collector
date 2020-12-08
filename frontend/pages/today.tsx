import useFetch from '@hooks/useFetch';
import Today from '../src/pages/Today';

function Index() {
  const { data: mag, isLoading, isError } = useFetch(`/magazines`);
  if (isLoading) return <div>...Loading</div>;
  if (isError) {
    console.log(isError);
    return <div>...Error</div>;
  }

  console.log('useFetch-today hook 시작!');
  console.log('data : ', mag);
  console.log('data.data : ', mag.data);

  return (
    <div>
      <Today magList={mag.data} />
    </div>
  );
}

export default Index;
