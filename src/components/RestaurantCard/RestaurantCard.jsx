'use client';

import Image from 'next/image';
import styles from './restaurantCard.module.css';
import { useState } from 'react';

function RestaurantCard({ image, title, location }) {
    const [like, setLike] = useState(false);

    return (
        <div className={styles.cardContainer}>
            <div className={styles.imageContainer}>
                <Image
                    className={styles.image}
                    src={image}
                    alt="Une image d'un plat"
                    fill
                    sizes="100vw"
                />
            </div>
            <div className={styles.contentCardContainer}>
                <div className={styles.textContainer}>
                    <h3 className={styles.titleCard}>{title}</h3>
                    <p className={styles.locationCard}>{location}</p>
                </div>
                <i
                    className={
                        like
                            ? `fa-solid fa-heart ${styles.likeColor}`
                            : 'fa-regular fa-heart'
                    }
                    onClick={() => setLike(!like)}
                ></i>
            </div>
        </div>
    );
}

export default RestaurantCard;
