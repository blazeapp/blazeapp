import type { NextPage } from 'next';
import Head from 'next/head';
import { authService } from 'services/auth';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Blaze App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </div>
  );
};

export async function getStaticProps() {
  const user = await authService.authorize();

  return {
    props: {
      user,
    },
  };
}

export default Home;
