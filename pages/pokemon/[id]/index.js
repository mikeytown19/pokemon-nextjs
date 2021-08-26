import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../../components/header';
import styles from '../../../styles/Home.module.css';
import {fadeInUp, stagger} from '../../../styles/motion'


import { motion } from "framer-motion";

const myLoader = ({ src }) => {
  return src;
};

const Post = ({ data }) => {


  const { name, height, weight, sprites, abilities, types } = data;
  return (
    <motion.div  initial='initial' animate='animate' exit={{ opacity: 0 }} className={styles.container}>
      <motion.div variants={stagger} className='product-row'>
      <Header />
      <h1 className={styles.title}>{name}</h1>
      <motion.div variants={fadeInUp}>
      <Image
        loader={myLoader}
        src={sprites.front_default}
        alt="Picture of the author"
        width={200}
        height={200}
      />
        <h3>Height: {height}</h3>
        <h3>Weight: {weight}lbs</h3>
        <h3>Type:
          {types.map(({type}, index) => ` ${type.name}` )}
          </h3>
        <h3>abilities</h3>
          {abilities.map(({ ability }) => (
            <div key={ability.name}>{ability.name}</div>
          ))}


        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Post;

export async function getServerSideProps(context) {
  const { title, url, id } = context.query;

  // returns { id: episode.itunes.episode, title: episode.title}

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  //you can make DB queries using the data in context.query
  return {
    props: {
      data: data //pass it to the page props
    }
  };
}
