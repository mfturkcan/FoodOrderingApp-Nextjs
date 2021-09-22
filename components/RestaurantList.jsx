import { Card, Button } from 'react-bootstrap';
import router from 'next/router';
import { v4 } from 'uuid';

const RestaurantList = props => {

    function handleClick(_id) {
        router.push("/restaurants/" + _id)
    }

    return (
        <div className="res-list" style={{ display: "flex", flexDirection: "row", margin: "20px 20px" }}>
            {
                props.restaurants.map(res => {
                    return <Card key={v4()} style={{ margin: "10px 10px" }}>
                        <Card.Img variant="top" src={res.resImg} style={{ width: "auto", height: 350, objectFit: "cover" }} />
                        <Card.Body>
                            <Card.Title>{res.restaurantName}</Card.Title>
                            <Card.Text>{res.about}</Card.Text>
                            <Button variant="primary" onClick={() => handleClick(res._id)}>View more</Button>
                        </Card.Body>
                    </Card>
                })
            }
        </div>
    );
}

export default RestaurantList;