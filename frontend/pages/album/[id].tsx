import { useRouter } from 'next/router';
import useFetch from '@hooks/useFetch';
import AlbumDetail from '../../src/pages/Detail/Album';

export function Index() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError } = useFetch(`/album/${id}`);

  if (isLoading) return <div>...Loading</div>;
  if (isError) {
    console.log(isError);
    return <div>...Error</div>;
  }

  console.log('useFetch album/id hook 시작!');
  console.log('data : ', data);
  console.log('data.data : ', data.data);
  return (
    <>
      <AlbumDetail albumInfo={data.data} />
      <p>{router.query.id}</p>
    </>
  );
}

export default Index;
