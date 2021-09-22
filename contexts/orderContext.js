import { useState, useContext, createContext, useEffect } from "react";
const OrderContext = createContext(undefined);

const OrderProvider = ({ children }) => {

    const [order, setOrder] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const data = {order: [order, handleOrder], totalPrice: [totalPrice, calculateTotalPrice], handleChange: [handleIncrease, handleDecrease]};

    useEffect(()=> {
        calculateTotalPrice();
    }, [order]);

    function handleOrder(orderFName, orderPrice, orderPriceAPI){
        setOrder(prev => {
            if(prev.find(obj => obj.foodName === orderFName) == null){
                return [{foodName: orderFName, price: orderPrice, count: 1, priceAPI: orderPriceAPI}, ...prev];
            }else{
                let prevFood = prev.find(e => e.foodName == orderFName);
                prev = prev.filter(obj => obj.foodName != orderFName);

                return [{...prevFood, count: prevFood.count + 1, }, ...prev];
            }
        });
    }

    function handleIncrease(fName){
        setOrder(prev => {
            let newFood = prev.find((food) => food.foodName == fName);
            newFood = {count: newFood.count += 1, ...newFood}
            prev.splice(prev.findIndex((f) => f.foodName == fName), 1, newFood)
            return[...prev]
        })
    }

    function handleDecrease(fName){
        setOrder(prev => {
            let newFood = prev.find((food) => food.foodName == fName);
            newFood = {count: newFood.count -= 1, ...newFood}
            prev.splice(prev.findIndex((f) => f.foodName == fName), 1, newFood)
            return[...prev]
        })
    }

    function calculateTotalPrice(){
        let total = 0;
        order.map(o => {
            total += o.price * o.count;
        })

        setTotalPrice(total);
    }

    return (
        <OrderContext.Provider value={data}> {children} </OrderContext.Provider>
    )
}

export function useOrder(){
    const context = useContext(OrderContext);

    if(context === undefined){
        throw new Error("useOrder can only be used inside OrderProvider");
    }

    return context;
}

export default OrderProvider;