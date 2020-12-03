import { Release } from 'models/release.model';
import styles from './release-card.module.scss';


interface Props {
  release: Release  
}

/**
  Saved title row able to unsave a title.
*/
export default function ReleaseCard( { release } : Props) {
  return (
    <div className={styles.card}>
      <div className={styles.box}>
        <img className={styles.cover} alt={release.title} src={release.cover_image}/>
      </div>
      <p className={styles.title}>{release?.title}</p>      
      <p className={styles.caption}>{release?.artist ?? release.type}</p>  
    </div>
  )
}
