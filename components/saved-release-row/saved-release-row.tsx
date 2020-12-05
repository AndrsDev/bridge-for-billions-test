import { Release } from 'models/release.model';
import styles from './saved-release-row.module.scss';
import FavButton from 'components/fav-button/fav-button';
import { useContext } from 'react';
import { CollectionContext } from 'contexts/collectionContext';

interface Props {
  release: Release  
}

/**
  Saved title row able to unsave a title.
*/
export default function SavedReleaseRow( { release } : Props) {
  const { items, toggleItem } = useContext(CollectionContext);

  return (
    <div className={styles.rowContainer}>

      <img alt={release.title} src={release.cover_image}/>
      <div className={styles.details}>
        <p className={styles.title}>{release.title}</p>      
        <p className={styles.caption}>{release.type}</p>  
      </div>
      <FavButton 
        onClick={() => toggleItem(release)} 
        isFavorite={items.includes(release)}
      />
    </div>
  )
}
