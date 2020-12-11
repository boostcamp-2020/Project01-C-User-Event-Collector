import MyTrack from '@pages/Library/MyTrack';
import useFetch from '@hooks/useFetch';

function Index() {
  const { data, isLoading, isError } = useFetch(`/library/tracks`);
  if (isLoading) return <div>...Loading</div>;
  if (isError) {
    console.log(isError);
    return <div>...Error</div>;
  }

  console.log('useFetch-tracks hook 시작!');
  console.log('data : ', data);
  console.log('data.data : ', data.data);

  return (
    <div>
      <MyTrack trackList={data.data} />
    </div>
  );
}

export default Index;
