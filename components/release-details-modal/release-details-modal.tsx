import Modal from 'components/modal/modal';
import { Release } from 'models/release.model';
import styles from './release-details-modal.module.scss';

interface Props {
  release: Release,
  onClose: () => void,
}

function ReleaseDetailsModal({ release, onClose } : Props) {
  return (
    <Modal onClose={onClose} >
      <img src={release.cover_image}/>
    </Modal>
  );
}

export default ReleaseDetailsModal;