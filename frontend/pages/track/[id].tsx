import { useRouter } from 'next/router';
import useTrack from '@hooks/useTrack';
import TrackDetail from '../../src/pages/Detail/Track';

export function Index() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError } = useTrack(id);

  if (isLoading) return <div>...Loading</div>;
  if (isError) {
    console.log(isError);
    return <div>...Error</div>;
  }

  console.log('useTrack hook 시작!');
  console.log('data : ', data);
  console.log('data.data : ', data.data);
  return (
    <>
      <TrackDetail trackInfo={data.data} />
      <p>{router.query.id}</p>
    </>
  );
}

export default Index;
