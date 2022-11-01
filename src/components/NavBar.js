import React, { useRef } from 'react'
import { Nav, Container, Form, Navbar } from 'react-bootstrap'

const NavBar = ({ filterBySearch ,inputValue }) => {
    const onSearch = (food) => {
        filterBySearch(food);
    }
    const InputValue = inputValue;
    return (
        <Navbar expand="lg" variant="dark" bg="dark">
            <Container >
                <Navbar.Brand className="m-0" href="#">مطعم بور مسكي</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Form id='search-btn' className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="إبحث"
                                className="me-2"
                                aria-label="Search"
                                ref={InputValue}
                            />
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => onSearch(InputValue.current.value)} type='button' className="btn-color">Search</button>
                        </Form>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar