import mongoose from "mongoose";
import Restaurant from "../../../models/restaurant";

const res1 = new Restaurant({
    restaurantName: "istanbul",
    about: "Şık bambu dekorlu ve köprü manzaralı zarif teras restoranında sunulan Asya füzyon yemekleri.",
    resImg: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    foods: [
        {
            foodName: "Chicken",
            about: "Chicken gets brined in flavorful buttermilk before hitting the fryer for a crisp, golden crust.",
            count: 243,
            price: 5.0,
            foodImg: "https://www.wearesovegan.com/wp-content/uploads/2021/05/veganfriedchickenoystermushroomrecipeh2.jpg",
            priceAPI: "price_1JM9WJBzQoGNVxXrJ5sRJ3Oy",
        },
        {
            foodName: "Meatball",
            about: "Grandma's tender and juicy meatball recipe simmered in a delicious tomato sauce and served with ...",
            count: 120,
            price: 2.5,
            foodImg: "https://www.jessicagavin.com/wp-content/uploads/2018/06/meatball-recipe-6-1200.jpg",
            priceAPI: "price_1JNhEXBzQoGNVxXrClRsj4dA",
        },
        {
            foodName: "Onion rings",
            about: "Here is how to make a terrific appetizer of Hot and Tasty Onion Rings. These are served with ...",
            count: 584,
            price: 1.0,
            foodImg: "https://bigoven-res.cloudinary.com/image/upload/t_recipe-1280/hot-and-tasty-onion-rings-2.jpg",
            priceAPI: "price_1JNhFMBzQoGNVxXrhzZhy3Ch",
        }
    ]
})

const res2 = new Restaurant({
    restaurantName: "adana",
    about: "Verandada oturma alanı bulunan bu mütevazı restoranda deniz ürünleri, odun ateşinde pişmiş et yemekleri ve tatlılar sunulur.",
    resImg: "https://media-cdn.tripadvisor.com/media/photo-s/18/5e/17/62/restaurant.jpg",
    foods: [
        {
            foodName: "Chicken",
            about: "Chicken gets brined in flavorful buttermilk before hitting the fryer for a crisp, golden crust.",
            count: 50,
            price: 5.0,
            foodImg: "https://www.wearesovegan.com/wp-content/uploads/2021/05/veganfriedchickenoystermushroomrecipeh2.jpg",
            priceAPI: "price_1JM9WJBzQoGNVxXrJ5sRJ3Oy",
        },
        {
            foodName: "Meatball",
            about: "Grandma's tender and juicy meatball recipe simmered in a delicious tomato sauce and served with ...",
            count: 79,
            price: 2.5,
            foodImg: "https://www.jessicagavin.com/wp-content/uploads/2018/06/meatball-recipe-6-1200.jpg",
            priceAPI: "price_1JNhEXBzQoGNVxXrClRsj4dA",
        },
        {
            foodName: "Onion rings",
            about: "Here is how to make a terrific appetizer of Hot and Tasty Onion Rings. These are served with ...",
            count: 120,
            price: 1.0,
            foodImg: "https://bigoven-res.cloudinary.com/image/upload/t_recipe-1280/hot-and-tasty-onion-rings-2.jpg",
            priceAPI: "price_1JNhFMBzQoGNVxXrhzZhy3Ch",
        }
    ]
})

const res3 = new Restaurant({
    restaurantName: "new mexico",
    about: "lasik et ve deniz ürünü yemeklerinin yanı sıra Ayasofya manzarası bulunan rahat, çatı katı mekanı.",
    resImg: "https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg",
    foods: [
        {
            foodName: "Chicken",
            about: "Chicken gets brined in flavorful buttermilk before hitting the fryer for a crisp, golden crust.",
            count: 222,
            price: 5.0,
            foodImg: "https://www.wearesovegan.com/wp-content/uploads/2021/05/veganfriedchickenoystermushroomrecipeh2.jpg",
            priceAPI: "price_1JM9WJBzQoGNVxXrJ5sRJ3Oy",
        },
        {
            foodName: "Meatball",
            about: "Grandma's tender and juicy meatball recipe simmered in a delicious tomato sauce and served with ...",
            count: 421,
            price: 2.5,
            foodImg: "https://www.jessicagavin.com/wp-content/uploads/2018/06/meatball-recipe-6-1200.jpg",
            priceAPI: "price_1JNhEXBzQoGNVxXrClRsj4dA",
        },
        {
            foodName: "Onion rings",
            about: "Here is how to make a terrific appetizer of Hot and Tasty Onion Rings. These are served with ...",
            count: 1059,
            price: 1.0,
            foodImg: "https://bigoven-res.cloudinary.com/image/upload/t_recipe-1280/hot-and-tasty-onion-rings-2.jpg",
            priceAPI: "price_1JNhFMBzQoGNVxXrhzZhy3Ch",
        }
    ]
})


const handler = async (req, res) => {

    /*

    For adding initial items to db

        Restaurant.insertMany([res1, res2, res3], function (err) {
            if (err) {
                console.log(err);
                console.log("An error occured!");
            }
        })
    */

    Restaurant.find(function (err, docs) {
        if (err) {
            res.status(404).json({ err: err })
        }
        res.status(202).json({ docs: docs });

    });

    return;
}


export default handler;