import { Card, Button } from 'react-bootstrap';
import { useOrder } from '../contexts/orderContext';
import { v4 } from 'uuid'

const FoodList = props => {

    const { order: [orders, handleClick] } = useOrder(useOrder);


    return (
        <div className="res-list" style={{ display: "flex", flexDirection: "row", margin: "20px 20px" }}>
            {
                props.foods.map(food => {
                    return <Card key={v4()} style={{ margin: "10px 10px" }}>
                        <Card.Img src={food.foodImg} variant="top" style={{ width: "auto", height: 350, objectFit: "cover" }} />
                        <Card.Body>
                            <Card.Title>{food.foodName}</Card.Title>
                            <Card.Text>{food.about}</Card.Text>
                            <Button variant="outline-primary" onClick={() => handleClick(food.foodName, food.price, food.priceAPI)}> + Add to Card</Button>
                        </Card.Body>
                    </Card>
                })
            }
        </div>
    );
}

export default FoodList;