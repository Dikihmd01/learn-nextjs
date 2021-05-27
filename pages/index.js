import Image from 'next/image';
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout';

export const Profile = () => (
  <>
    <Layout>
      <Head>
        <title>Homepage</title>
      </Head>

      <Image src="/images/profile.jpg" alt="my picture" width={50} height={50} />

      <h3>Postingan terbaru</h3>
      <ul>
        <li>
          <Link href="/posts/first-post">
            <a>First post</a>
          </Link>
        </li>
      </ul>
    </Layout>
  </>
);
export default Profile;