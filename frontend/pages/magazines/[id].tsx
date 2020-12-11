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

  console.log('useFetch magazine/id hook 시작!');
  console.log('data : ', data);
  console.log('data.data : ', data.data);
  return (
    <>
      <MagazineDetail magazineInfo={data.data} />
      <p>{router.query.id}</p>
    </>
  );
}

export default Index;
