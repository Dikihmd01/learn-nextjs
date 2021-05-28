import utilStyles from '../styles/utils.module.css'
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
      <section className={utilStyles.headingMd}>
        <p>Hi, I am Diki Hamdani. I live in Tasikmalaya, Indonesia. I currently learn Next.Js.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, description }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <p>{description}</p>
              {date}
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