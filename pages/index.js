import axios from 'axios';
import RestaurantList from '../components/RestaurantList';
import NavigationBar from '../components/partials/NavigationBar';

export default function Restaurants(props) {
    return (
        <div>
            <NavigationBar />
            <RestaurantList restaurants={props.restaurants} />
        </div>
    );
}

export async function getServerSideProps(context) {
    const { data } = await axios.get(process.env.URL + "/api/restaurants/get_restaurants");

    return {
        props: {
            restaurants: data.docs,
        }
    }
}