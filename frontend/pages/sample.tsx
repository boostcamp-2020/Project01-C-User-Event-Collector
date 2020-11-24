import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

// import JJango from '../public/images/jjango.jpeg';

interface allPostsData {
    date: string;
    title: string;
    id: string;
};

export default function Home(props : allPostsData) {
    return (
        <div>hello it's next app
            {/* <Image src={JJango} alt="me" width="64" height="64" /> */}
            <Image src="../public/images/issuelogo.png" alt="me" width="64" height="64" />
        </div>
    )
}

// export const getStaticProps: GetStaticProps = async () => {
//     // const allPostsData = getSortedPostsData()
//     // return {
//     //     props: {
//     //         allPostsData
//     //     }
//     // }
// }