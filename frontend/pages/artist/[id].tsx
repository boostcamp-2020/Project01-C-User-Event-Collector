import Sample from '@components/sample-rx';
import { useRouter } from 'next/router';

export function Index({ trackInfo }) {
  const router = useRouter();
  console.log('trackInfo : ', trackInfo);
  return (
    <div>
      <Sample text="Hello! this is Artist detail page" />
      <p>{router.query.id}</p>
      <div>
        <p>{trackInfo.name}</p>
        <p>{trackInfo.imgUrl}</p>
        <p>{trackInfo.id}</p>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  console.log(id);
  const apiUrl = `http://localhost:8000/api/artist/${id}`;
  const res = await fetch(apiUrl);
  const data = await res.json();
  const trackInfo = data.data;

  return {
    props: { trackInfo },
  };
}

export default Index;
