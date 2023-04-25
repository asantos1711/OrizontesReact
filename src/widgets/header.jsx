import React from 'react'
import '../assets/style.css';
import Logo from '../assets/logo.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => {
    return (
        <Container className='header' >
            <Row>
                <Col sm={2} md={2} lg={2}>
                    <img src={Logo} alt="Logo" height="35px" />
                </Col>
                <Col sm={6} md={6} lg={6}>
                    <img src={Logo} alt="Logo" height="35px" />
                </Col>
            </Row>
        </Container>
    )
}


export default Header

