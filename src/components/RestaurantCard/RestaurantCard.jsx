import Image from 'next/image';
import styles from './restaurantCard.module.css';

function RestaurantCard({ image, title, location }) {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.imageContainer}>
                <Image
                    className={styles.image}
                    src={image}
                    alt="Une image d'un plat"
                    fill
                />
            </div>
            <div className={styles.contentCardContainer}>
                <div className={styles.textContainer}>
                    <h3 className={styles.titleCard}>{title}</h3>
                    <p className={styles.locationCard}>{location}</p>
                </div>
                <i className="fa-regular fa-heart"></i>
            </div>
        </div>
    );
}
// À regarder pour l'attribut alt
export default RestaurantCard;
