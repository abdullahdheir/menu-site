import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Foods } from './Data'
import FoodCard from './FoodCard'
import NotFound from './NotFound'

const DataList = (props) => {
    const foods = props.food;
    return (
        <Row>
            <Col>
                {foods.length ? foods.map(food => (<FoodCard key={food.id} food={food} />)) : (<NotFound/>)}
            </Col>
        </Row>
    )
}

export default DataList