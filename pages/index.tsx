// import Head from 'next/head'
import Collection from 'components/collection/collection';
import styles from './index.module.scss';
import ReleaseCard from 'components/release-card/release-card';
import { data } from 'test_data';

// export async function getStaticProps(context) {
//    fetch('http://localhost:3000/')
//     .then(response => response.json().then((data) => {
//       console.log(data)
//     }))
//     .then(data => console.log(data));

//   fetch("")
//   console.log(process.env.DISCOGS_CONSUMER_KEY);
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }

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
