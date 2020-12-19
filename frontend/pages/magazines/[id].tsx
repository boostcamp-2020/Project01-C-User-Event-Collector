import { useRouter } from 'next/router';
import api from '@api/index';
import getRefererFromHeader from '@utils/getRefererFromHeader';
import MagazineDetail from '../../src/pages/Detail/Magazine';

export function Index({ referer, magDetailData }) {
  const router = useRouter();
  const logData = {
    eventTime: new Date(),
    eventName: 'move_event',
    parameters: { prev: referer, next: router.asPath },
  };
  api.post('/log', logData);

  return (
    <>
      <MagazineDetail magazineInfo={magDetailData} />
    </>
  );
}

export async function getServerSideProps({ req, query: { id } }) {
  const referer = getRefererFromHeader(req.headers);
  const magDetailData = await api.get(`/magazine/${id}`).then(res => res.data.data);
  return { props: { referer, magDetailData } };
}

export default Index;
