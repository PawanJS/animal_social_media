import Head from 'next/head';

import { Layout } from '../components/Layout/layout';
import SignIn from '../components/SignIn/signIn.component';

export default function Sign_in() {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login to animal social media" />
      </Head>
      <Layout>
        <SignIn />
      </Layout>
    </>
  );
}
