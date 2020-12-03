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
      <img alt={release.title} src="https://img.discogs.com/oTaCoY-RnF3kUTwQM1wSooqB5xk=/700x700/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-16191359-1605179753-6676.jpeg.jpg"/>
      <p className={styles.title}>{release.title}</p>      
      <p className={styles.caption}>{release.artist}</p>  
    </div>
  )
}
