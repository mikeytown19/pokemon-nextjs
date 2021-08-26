import {useEffect, useState} from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from '../components/header';
import styles from '../styles/Home.module.css';

import { motion } from "framer-motion";
import {fadeInUp, stagger} from '../styles/motion'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())


function Page () {
  const [pokemonNumber, setPokemonNumber] = useState(0)
  return (
    <div className={styles.container}>
      <Home index={pokemonNumber}/>
      <button className={styles.card} onClick={() => setPokemonNumber(pokemonNumber - 20)}>Previous</button>
      <button className={styles.card} onClick={() => setPokemonNumber(pokemonNumber + 20)}>Next</button>
  </div>
  )
}



function Home ({index}) {
  const { data, error } = useSWR(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${index}`, fetcher)

  if (error) return <div>failed to load</div>
  return (
    <motion.div  initial='initial' animate='animate' exit={{ opacity: 0 }} className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Pokemon <a>NextJs</a>
        </h1>
      <motion.div variants={stagger}>
      <motion.div variants={fadeInUp}>
        <div className={styles.grid}>
          {
            !data ? <div>loading...</div> :
          data.results.map(({ name, url }) => (
            <Link key={url} href={'/pokemon/[id]'} as={`/pokemon/${name}`}>
              <a className={styles.card}>{name}</a>
            </Link>
          ))}
        </div>

          </motion.div>
      </motion.div>
      </main>
    </motion.div>
  );
};

export default Page;

