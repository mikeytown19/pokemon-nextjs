import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from '../components/header';
import styles from '../styles/Home.module.css';

const Home = ({ data }) => {
  const router = useRouter();
  const { id, comment } = router.query;

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Pokemon <a>NextJs</a>
        </h1>

        <div className={styles.grid}>
          {data.results.map(({ name, url }) => (
            <Link key={url} href={'/pokemon/[id]'} as={`/pokemon/${name}`}>
              <a className={styles.card}>{name}</a>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=9`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true
    };
  }

  return {
    props: { data } // will be passed to the page component as props
  };
}
