// import Head from 'next/head'
import styles from './collection.module.scss';
import SavedReleaseRow from 'components/saved-release-row/saved-release-row';
import { data } from 'test_data';
import Divider from 'components/divider/divider';

/**
  Collection of saved user titles
*/
export default function Collection() {
  return (
    <section className={styles.mainContainer}>
      <h2>Collection</h2>

      {
        data.map((item) =>   
          <div key={item.id} className={styles.spacing}>
            <SavedReleaseRow release={item}/>
          </div>
        )
      }
      {/* <div className>

      </div> */}
    </section>
  )
}
