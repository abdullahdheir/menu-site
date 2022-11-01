import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { Zoom } from 'react-reveal';

const FoodCard = (props) => {
    const food = props.food;
    return (
        <Row >
            <Col sm='12' className='mb-3'>
                <Zoom>
                    <Card className=' food-card' >
                        <div>
                            <Card.Img className='img-item food-image ' src={`./assets/imgs/${ food.image }`} />
                        </div>
                        <Card.Body className='w-100'>
                            <Card.Title className='d-flex m-0 justify-content-between'>
                                <p className='food-name'>{food.name}</p>
                                <p className='food-price'>{food.price}</p>
                            </Card.Title>
                            <Card.Text className="food-card-description">
                                {food.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Zoom>
            </Col>
        </Row>
    )
}

export default FoodCard