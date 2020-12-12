import { useRouter } from 'next/router';
import useFetch from '@hooks/useFetch';
import ArtistDetail from '../../src/pages/Detail/Artist';

export function Index() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError } = useFetch(`/artist/${id}`);

  if (isLoading) return <div>...Loading</div>;
  if (isError) {
    console.log(isError);
    return <div>...Error</div>;
  }

  console.log('useFetch artist/id hook 시작! : ', new Date());
  console.log('data : ', data);
  console.log('data.data : ', data.data);
  return (
    <>
      <ArtistDetail artistInfo={data.data} />
      <p>{router.query.id}</p>
    </>
  );
}

export default Index;
