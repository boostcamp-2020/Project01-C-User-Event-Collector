import MyArtist from '@pages/Library/MyArtist';
import useFetch from '@hooks/useFetch';

function Index() {
  const { data, isLoading, isError } = useFetch(`/library/artists`);
  if (isLoading) return <div>...Loading</div>;
  if (isError) {
    console.log(isError);
    return <div>...Error</div>;
  }

  console.log('useFetch-artists hook 시작!');
  console.log('data : ', data);
  console.log('data.data : ', data.data);

  return (
    <div>
      <MyArtist artistList={data.data} />
    </div>
  );
}

export default Index;
