import MyPlaylist from '@pages/Library/MyPlaylist';
import useFetch from '@hooks/useFetch';

function Index() {
  const { data, isLoading, isError } = useFetch(`/library/playlists`);
  if (isLoading) return <div>...Loading</div>;
  if (isError) {
    console.log(isError);
    return <div>...Error</div>;
  }

  console.log('useFetch-playlists hook 시작!');
  console.log('data : ', data);
  console.log('data.data : ', data.data);

  return (
    <div>
      <MyPlaylist playlistList={data.data} />
    </div>
  );
}

export default Index;
