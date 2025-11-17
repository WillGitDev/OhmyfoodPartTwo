import Image from 'next/image';
import styles from './restaurantCard.module.css';
function RestaurantCard() {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.imageContainer}>
                <Image
                    className={styles.image}
                    src="/images/restaurants/jay-wennington-N_Y88TWmGwA-unsplash.jpg"
                    alt="Une image d'un plat"
                    fill
                />
            </div>
            <div className={styles.contentCardContainer}>
                <div className={styles.textContainer}>
                    <h3 className={styles.titleCard}>La palette du goût</h3>
                    <p className={styles.textCard}>Ménilmontant</p>
                </div>
                <i className="fa-regular fa-heart"></i>
            </div>
        </div>
    );
}

export default RestaurantCard;
