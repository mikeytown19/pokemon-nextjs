import { useRouter } from 'next/router';
import Header from '../../../components/header';
import styles from '../../../styles/Home.module.css';

const Comment = () => {
  const router = useRouter();
  const { id, comment } = router.query;

  return (
    <div className={styles.container}>
      <Header />
      <h1>Post: {id}</h1>
      <h1>Comment: {comment}</h1>
    </div>
  );
};

export default Comment;
