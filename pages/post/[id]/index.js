import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../../components/header';
import styles from '../../../styles/Home.module.css';

const myLoader = ({ src, width, quality }) => {
  return src;
};

const Post = ({ data }) => {
  const router = useRouter();
  const { id, url } = router.query;

  const { name, height, weight, sprites } = data;
  return (
    <div className={styles.container}>
      <Header />
      <h1> {name}</h1>
      <Image
        loader={myLoader}
        src={sprites.front_default}
        alt="Picture of the author"
        width={200}
        height={200}
      />
      <div className={styles.grid}>
        <Link href="/post/[id]/[comment]" as={`/post/${id}/first-comment`}>
          <a className={styles.card}>First comment</a>
        </Link>

        <Link href="/post/[id]/[comment]" as={`/post/${id}/second-comment`}>
          <a className={styles.card}>Second comment</a>
        </Link>
      </div>
    </div>
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
