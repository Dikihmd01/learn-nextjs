import Layout from '../../components/layout'
import {getAllPostIds, getPostData} from '../../lib/posts'
import Head from 'next/head'
// import utilStyles from '../../styles/utils.module.css'
import Date from '../../components/date'

export default function Post({postData}) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>

            <h3 className="text-5xl font-bold font-sans mt-3">{postData.title}</h3> 
            {/* <br /> */}
            {/* {postData.id} */}
            {/* <br /> */}
            <p className="italic text-sm mt-2 ml-2">
                <Date dateString={postData.date}/>
            </p>
            <br/>

            <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />

            <div class="font-sans">
				<p class="text-base md:text-sm text-green-500 font-bold py-6">&lt; <a href="/" class="text-base md:text-sm text-green-500 font-bold no-underline hover:underline">Back to Home</a></p>
			</div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths, 
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}