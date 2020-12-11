import useFetch from '@hooks/useFetch';
import Today from '../src/pages/Today';

function Index() {
  const { data: mag, isLoading: magLoading, isError: magError } = useFetch(`/magazine`);
  const { data: playlist, isLoading: playLoading, isError: playError } = useFetch(`/playlist`);

  if (magLoading || playLoading) return <div>...Loading</div>;
  if (magError || playError) {
    console.log(magError);
    console.log(playError);
    return <div>...Error</div>;
  }

  console.log('useFetch-today hook 시작!');
  console.log('data : ', mag);
  console.log('data.data : ', mag.data);

  return (
    <div>
      <Today magList={mag.data} playlistList={playlist.data} />
    </div>
  );
}

export default Index;
