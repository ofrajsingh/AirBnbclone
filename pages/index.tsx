import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import { useEffect } from 'react';
import ExploreData from "./Data/Explore.json"
const Home= () => {
console.log("ex", ExploreData);
  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
        </section>
      </main>

    </div>
  )
}


export default Home

// export async function getStaticProps(){
//   console.log('YOYO');
//   const exploreData = await fetch("https://links.papareact.com/pyp").then(res=>res.json());
  
//   return {
//     props: {
//       exploreData
//     }
//   }
// }
