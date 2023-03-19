import type { NextPage } from 'next';
import Head from 'next/head';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Services from '../components/Card';
import Navbar from '../components/Navbar';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto">
        <div className="">
          <Navbar />
          <Hero />
        </div>
        <Services />
      </main>
    </>
  );
};

export default Home;
