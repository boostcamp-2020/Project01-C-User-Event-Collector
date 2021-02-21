import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import useFetch from '@hooks/useFetch';
import api from '@api/index';
import Spinner from '@components/Common/Spinner';
import getRefererFromHeader from '@utils/getRefererFromHeader';
import ArtistDetail from '../../src/pages/Detail/Artist';

export function Index({ referer }) {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError } = useFetch(`/artist/${id}`, null);

  if (isLoading) return <Spinner />;
  if (isError) {
    console.log(isError);
    return <div>...Error</div>;
  }

  const logData = {
    eventTime: new Date(),
    eventName: 'move_event',
    parameters: { prev: referer, next: router.asPath },
  };
  api.post('/log', logData);

  return (
    <>
      <ArtistDetail artistInfo={data.data} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const referer = getRefererFromHeader(req.headers);
  return { props: { referer } };
};

export default Index;
