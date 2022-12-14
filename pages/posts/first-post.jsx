import Link from 'next/link';
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/Layout';


export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>This is the first post</title>
       
      </Head>
 <Script
        // src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />

      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
        <Image src="/images/profile.jpg" height='300px' width='300px' alt="Jason" />

      </h2>
    </Layout>
  );
}