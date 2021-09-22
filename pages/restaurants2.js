import FoodList from "../components/FoodList";
import NavigationBar from "../components/partials/NavigationBar";
import Receipt from "../components/Receipt";
import axios from "axios";

const Restaurants = props => {
    console.log(props)
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
    console.log(context.query)
    console.log(context.params)
    //console.log("params:" + req.params)

    const id = context.query.id;
    console.log(id);

    const { data } = await axios.get("http://localhost:3000/api/restaurants/" + id);

    const foods = data.foods;
    return {
        props: {
            foods: foods,
        }
    }
}


export default Restaurants;