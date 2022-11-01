import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Roll } from 'react-reveal';
import { Category } from './Data';
const FilterButtons = ({ filterByCategory, inputValue }) => {
  const onFilter = (cat) => {
    inputValue.current.value = "";
    filterByCategory(cat);
  }

  return (
    <Row >
      <Col sm="12" className='filter-btn'>
        <Roll >

          <button onClick={() => onFilter(0)} type="button" className='btn-color'> الكل</button>
          {
            Category.map(cat => (
              <button onClick={() => onFilter(cat.id)} type="button" key={cat.id} className='btn-color'> {cat.name_ar}</button>
            ))
          }
        </Roll>
      </Col>
    </Row >
  )
}

export default FilterButtons