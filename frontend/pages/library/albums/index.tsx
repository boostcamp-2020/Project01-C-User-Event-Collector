import MyAlbum from '@pages/Library/MyAlbum';
import useFetch from '@hooks/useFetch';

function Index() {
  const { data, isLoading, isError } = useFetch(`/library/albums`);
  if (isLoading) return <div>...Loading</div>;
  if (isError) {
    console.log(isError);
    return <div>...Error</div>;
  }

  console.log('useFetch-albums hook 시작!');
  console.log('data : ', data);
  console.log('data.data : ', data.data);

  return (
    <div>
      <MyAlbum albumList={data.data} />
    </div>
  );
}

export default Index;
