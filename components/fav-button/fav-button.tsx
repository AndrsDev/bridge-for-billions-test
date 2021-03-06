import styles from './fav-button.module.scss';

interface Props {
  isFavorite?: boolean
  onClick: () => void
}

function FavButton({ onClick, isFavorite = false}) {
  return (
    <button className={styles.favButton} onClick={onClick}>
      {isFavorite ? <FavoriteIconFilled /> : <FavoriteIconOutline />}
    </button>
  );
}

function FavoriteIconOutline() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.0001 4C19.6801 4 17.4534 5.08 16.0001 6.78667C14.5467 5.08 12.3201 4 10.0001 4C5.89341 4 2.66675 7.22667 2.66675 11.3333C2.66675 16.3733 7.20008 20.48 14.0667 26.72L16.0001 28.4667L17.9334 26.7067C24.8001 20.48 29.3334 16.3733 29.3334 11.3333C29.3334 7.22667 26.1067 4 22.0001 4ZM16.1334 24.7333L16.0001 24.8667L15.8667 24.7333C9.52008 18.9867 5.33341 15.1867 5.33341 11.3333C5.33341 8.66667 7.33342 6.66667 10.0001 6.66667C12.0534 6.66667 14.0534 7.98667 14.7601 9.81333H17.2534C17.9467 7.98667 19.9467 6.66667 22.0001 6.66667C24.6667 6.66667 26.6667 8.66667 26.6667 11.3333C26.6667 15.1867 22.4801 18.9867 16.1334 24.7333Z" fill="#101010"/>
    </svg>
  )
}

function FavoriteIconFilled() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.0001 28.4667L14.0667 26.7067C7.20008 20.48 2.66675 16.3733 2.66675 11.3333C2.66675 7.22667 5.89341 4 10.0001 4C12.3201 4 14.5467 5.08 16.0001 6.78667C17.4534 5.08 19.6801 4 22.0001 4C26.1067 4 29.3334 7.22667 29.3334 11.3333C29.3334 16.3733 24.8001 20.48 17.9334 26.72L16.0001 28.4667Z" fill="#FF8585"/>
    </svg>
  )
}

export default FavButton;