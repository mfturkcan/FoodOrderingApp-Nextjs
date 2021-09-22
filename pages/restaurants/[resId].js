import axios from 'axios';
import FoodList from '../../components/FoodList';
import NavigationBar from '../../components/partials/NavigationBar';
import { useState } from 'react';
import Receipt from '../../components/Receipt';
import { useOrder } from '../../contexts/orderContext';

const Orders = props => {

    return (
        <div>
            <NavigationBar />
            <div style={{ display: "flex", flexDirection: "row" }}>
                <FoodList foods={props.foods} />
                <Receipt />
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {

    //console.log(params);

    const { data } = await axios.get(process.env.URL + "/api/restaurants/" + context.query.resId);

    const foods = data.foods;
    return {
        props: {
            foods: foods,
        }
    }
}


export default Orders;