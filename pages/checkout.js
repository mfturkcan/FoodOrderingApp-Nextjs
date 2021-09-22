import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe, useElements, CardElement, ElementsConsumer } from "@stripe/react-stripe-js";
import { Button } from "react-bootstrap";
import NavigationBar from "../components/partials/NavigationBar";
import OrderProvider, { useOrder } from "../contexts/orderContext";
import { Form } from 'react-bootstrap';
import Receipt from "../components/Receipt";
import axios from "axios";

const Checkout = props => {
    const stripe = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);

    return (
        <div>
            <NavigationBar />
            <div style={{ display: "flex", flexDirection: "row", margin: "20px 40px", width: "100%" }}>
                <Receipt style={{ margin: "0px 40px" }} />
                <Elements stripe={stripe}>
                    <InjectedCheckoutForm />
                </Elements>
            </div>
        </div>
    );
}


const MyCheckoutForm = props => {
    const stripe = useStripe();
    const elements = useElements();
    console.log(stripe);

    const { order: [order, handlePrice] } = useOrder(useOrder);
    function onChange() { }

    async function handleSubmit(event) {
        event.preventDefault();

        const orderData = order.map(o => {
            return {
                price: o.priceAPI,
                quantity: o.count,
            }
        });

        console.log(orderData);
        let { data } = await axios.post(process.env.URL + "/api/checkout_sessions", {
            orderList: orderData,
        });
        console.log(data);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group style={{ display: "flex" }}>
                <div style={{ flex: "0.90", marginRight: 10 }}>
                    <Form.Label>Address</Form.Label>
                    <input name="address" onChange={onChange} />
                </div>
            </Form.Group>
            <Form.Group style={{ display: "flex" }}>
                <div style={{ flex: "0.65", marginRight: "6%" }}>
                    <Form.Label>City</Form.Label>
                    <input name="city" onChange={onChange} />
                </div>
                <div style={{ flex: "0.25", marginRight: 10, width: "100px" }}>
                    <Form.Label>State</Form.Label>
                    <input name="state" onChange={onChange} />
                </div>
            </Form.Group>
            <Form.Group style={{ width: "500px", margin: " 40px 40px" }}>
                <CardElement options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }} />
            </Form.Group>
            <Button type="submit" variant="outline-primary" disabled={!stripe} style={{ margin: "10px 40px" }}>Pay</Button>
        </Form>
    );
}


const InjectedCheckoutForm = () => {
    return (
        <ElementsConsumer>
            {({ elements, stripe }) => (
                <MyCheckoutForm elements={elements} stripe={stripe} />
            )}
        </ElementsConsumer>
    );
};

export default Checkout;