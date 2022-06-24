import Head from 'next/head';

import { Layout } from '../components/Layout/layout';

export default function Sign_in() {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login to animal social media" />
      </Head>
      <Layout>
        <h1>Sign_in page</h1>
      </Layout>
    </>
  );
}
