// import Head from 'next/head'
import Collection from 'components/collection/collection';
import styles from './index.module.scss';

export default function Home() {
  return (
    <div className={styles.layout}>
      <Collection />
      <main>
        Content
      </main>
    </div>
  )
}
