import Sample from '@components/sample-rx';
import { useRouter } from 'next/router';

export function Index() {
  const router = useRouter();

  return (
    <div>
      <Sample text="Hello! this is Artist detail page" />
      <p>{router.query.id}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  console.log(id);
  const apiUrl = `http://localhost:8000/api/artist/${id}`;
  const res = await fetch(apiUrl);
  const data = await res.json();
  console.log('data : ', data);

  return {
    props: { data },
  };
}

export default Index;
