// import Head from 'next/head'
import Collection from 'components/collection/collection';
import styles from './index.module.scss';
import ReleaseCard from 'components/release-card/release-card';
import { data } from 'test_data';

export default function Home() {
  return (
    <div className={styles.layout}>
      <Collection />
      <main className={styles.mainContainer}>
        <div className={styles.gridView}>

          <input placeholder="Search by artist , album or both..."/>

          {
            data.map(item => 
              <ReleaseCard key={item.id} release={item}/>
            )
          }

        </div>
      </main>
    </div>
  )
}
