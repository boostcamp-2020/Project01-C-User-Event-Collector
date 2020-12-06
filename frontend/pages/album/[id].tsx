import { useRouter } from 'next/router';
import AlbumDetail from '../../src/pages/Detail/Album';

export function Index({ albumInfo }) {
  const router = useRouter();
  console.log('albumInfo : ', albumInfo);
  return (
    <>
      <AlbumDetail albumInfo={albumInfo} />
      <p>{router.query.id}</p>
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const apiUrl = `http://localhost:8000/api/album/${id}`;
  const res = await fetch(apiUrl);
  const data = await res.json();
  const albumInfo = data.data;

  return {
    props: { albumInfo },
  };
}

export default Index;
