import dataRestaurant from '../../../data/restaurants.json';
import RestaurantHeader from '@/components/RestaurantHeader/RestaurantHeader.jsx';
import MenuItem from '@/components/MenuItem/MenuItem.jsx';
import Image from 'next/image';

export default async function Restaurant({ params }) {
    const restaurant = dataRestaurant.restaurants.find((element) => {
        const restoFind = element.slug === params.slug;
        return restoFind;
    });
    //console.log(restaurant.menu.entrées);
    const entrees = restaurant.menu.entrées;
    const plats = restaurant.menu.plats;
    const desserts = restaurant.menu.desserts;

    console.log(Array.isArray(entrees));
    return (
        <>
            <div className="heroImage">
                <Image
                    src={restaurant.image}
                    alt="photo d'un plat"
                    fill
                    className="image"
                />
            </div>

            <div className="mainWrapper">
                <div className="contentWrapper">
                    <RestaurantHeader name={restaurant.name} />
                    <h3 className="sectionTitle">ENTRÉES</h3>
                    {entrees.map((entree, index) => (
                        <MenuItem key={index} item={entree} index={index} />
                    ))}
                    <h3 className="sectionTitle">PLATS</h3>
                    {plats.map((plat, index) => {
                        return (
                            <MenuItem key={index} item={plat} index={index} />
                        );
                    })}
                    <h3 className="sectionTitle">DESSERTS</h3>
                    {desserts.map((dessert, index) => (
                        <MenuItem key={index} item={dessert} index={index} />
                    ))}
                </div>
            </div>
        </>
    );
}
