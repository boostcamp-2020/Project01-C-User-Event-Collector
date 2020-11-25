import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

interface allPostsData {
  date: string;
  title : string;
  id: string;
}

export default function Home(props: allPostsData): any {
  return (
    <div>
      hello this is next app
      <Image src="/images/faviconCat.png" alt="me" width="64" height="64" />
    </div>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//     // const allPostsData = getSortedPostsData()
//     // return {
//     //     props: {
//     //         allPostsData
//     //     }
//     // }
// }
