import { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import { useRouter } from "next/router";
import { useOrder } from "../contexts/orderContext";
import { v4 } from 'uuid';

const Receipt = props => {

    const { order: [orders, handleClick], totalPrice: [tPrice, calculateTotalPrice], handleChange: [handleIncrease, handleDecrease] } = useOrder(useOrder);
    console.log(orders);
    const router = useRouter();



    const receiptStyle = {
        display: "flex",
        flexDirection: "column",
        width: "400px",
        margin: "50px 10px",
    }

    return (
        <div style={receiptStyle}>
            <h4>Your Order:</h4>
            <p>Items: </p>
            {
                orders.map(order => {
                    return <Item key={v4()} price={order.price} foodName={order.foodName} count={order.count} handleIncrease={handleIncrease} handleDecrease={handleDecrease} />
                })
            }
            <p>Total: </p>
            <div style={{ fontSize: "20px" }}>$ {tPrice}</div>
            <Button variant="primary" onClick={() => { router.push("/checkout") }}>Order</Button>
        </div>
    );
}

const Item = props => {
    return (
        <div style={{ fontSize: "20px" }}>
            <div>${props.price} {props.foodName}</div>
            <p style={{ color: "blue", margin: "5px 10px", flexDirection: "row", display: "flex", marginRight: "5px" }}>
                <div style={{ marginRight: "10px" }} onClick={() => { props.handleIncrease(props.foodName) }}>+</div>
                <div style={{ marginRight: "10px" }} onClick={() => { props.handleDecrease(props.foodName) }}>-</div>
                {props.count}x
            </p>
        </div>
    )
}

export default Receipt;