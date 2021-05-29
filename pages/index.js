// import utilStyles from '../styles/utils.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Layout, {siteTitle} from '../components/layout';
import {getSortedPostsData} from '../lib/posts'

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
          <title>{siteTitle}</title>
      </Head>

      <section>
        <h2 className="text-3xl font-bold font-sans">Recent Posts</h2>
        <ul>
          {allPostsData.map(({ id, date, title, description }) => (
            <li className="list-none" key={id}>
              <h3 className="text-xl font-semibold font-sans mt-3">
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
              </h3>
              <p>{description.substring(0, 140)}</p>
              <br/>
              <hr/>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
} 

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData
    }
  }
}