import { Release } from 'models/release.model';
import styles from './saved-release-row.module.scss';


interface Props {
  release: Release  
}

/**
  Saved title row able to unsave a title.
*/
export default function SavedReleaseRow( { release } : Props) {
  return (
    <div className={styles.rowContainer}>

      <img alt={release.title} src="https://img.discogs.com/oTaCoY-RnF3kUTwQM1wSooqB5xk=/700x700/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-16191359-1605179753-6676.jpeg.jpg"/>
      <div className={styles.details}>
        <p className={styles.title}>{release.title}</p>      
        <p className={styles.caption}>{release.artist}</p>  
      </div>
      <div>♥️</div>
    </div>
  )
}
