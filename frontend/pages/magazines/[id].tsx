import { useRouter } from 'next/router';
import useFetch from '@hooks/useFetch';
import MagazineDetail from '../../src/pages/Detail/Magazine';

export function Index() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError } = useFetch(`/magazine/${id}`);

  if (isLoading) return <div>...Loading</div>;
  if (isError) {
    console.log(isError);
    return <div>...Error</div>;
  }

  return (
    <>
      <MagazineDetail magazineInfo={data.data} />
      <p>{router.query.id}</p>
    </>
  );
}

export default Index;
