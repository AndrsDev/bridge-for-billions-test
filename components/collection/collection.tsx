// import Head from 'next/head'
import styles from './collection.module.scss';
import SavedReleaseRow from 'components/saved-release-row/saved-release-row';
import { useContext } from 'react';
import { CollectionContext } from 'contexts/collectionContext';

/**
  Collection of saved user titles
*/
export default function Collection() {

  const { items } = useContext(CollectionContext);
  
  return (
    <section className={styles.mainContainer}>
      <h2>Collection</h2>
      {
        items.map((item, index) =>   
          <div key={index} className={styles.spacing}>
            <SavedReleaseRow release={item}/>
          </div>
        )
      }
      {
        items.length === 0 && <p>Add items to your collection.</p>
      }
    </section>
  )
}
