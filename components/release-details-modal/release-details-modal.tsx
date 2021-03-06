import Divider from 'components/divider/divider';
import FavButton from 'components/fav-button/fav-button';
import Modal from 'components/modal/modal';
import { CollectionContext } from 'contexts/collectionContext';
import { Release } from 'models/release.model';
import { useContext } from 'react';
import styles from './release-details-modal.module.scss';

interface Props {
  release: Release,
  onClose: () => void,
}

function ReleaseDetailsModal({ release, onClose } : Props) {

  const { items, toggleItem } = useContext(CollectionContext);

  
  return (
    <Modal onClose={onClose} >
      <img className={styles.img} src={release.cover_image}/>
      <div className={styles.content}>

        <div className={styles.modalHeader}>
          <div className={styles.headerTitle}>
            <h2>{release.title}</h2>
            <p>{release.type}</p>
          </div>
          <FavButton 
            onClick={() => toggleItem(release)} 
            isFavorite={items.includes(release)}
          />
        </div>

        <Divider />

        <div className={styles.detailRow}>
          <p><strong>Status</strong></p>
          <p>{release.status ?? "---"}</p>
        </div>
        <div className={styles.detailRow}>
          <p><strong>Year</strong></p>
          <p>{release.year ?? "---"}</p>
        </div>
        <div className={styles.detailRow}>
          <p><strong>Role</strong></p>
          <p>{release.role ?? "---"}</p>
        </div>
        <div className={styles.detailRow}>
          <p><strong>Label</strong></p>
          <p>{release.label?.[0] ?? "---"}</p>
        </div>
        <div className={styles.detailRow}>
          <p><strong>Format</strong></p>
          <p>{release.format?.[0] ?? "---"}</p>
        </div>
        <div className={styles.detailRow}>
          <p><strong>ID</strong></p>
          <p>{release.id ?? "---"}</p>
        </div>
      </div>
    </Modal>
  );
}

export default ReleaseDetailsModal;