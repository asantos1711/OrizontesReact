import React from 'react'
import '../assets/style.css';
import Logo from '../assets/logo.svg';
import Container from 'react-bootstrap/Container';
import IconoClick from './iconoClick';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => {
    return (
        <div className='header'>
            <Container  >
                <Row>
                    <Col sm={2} md={2} lg={2}>
                        <img src={Logo} alt="Logo" />
                    </Col>
                    <Col sm={6} md={6} lg={6}></Col>
                    <Col sm={4} md={4} lg={4}>
                        <IconoClick icono={"user"} />
                        <IconoClick icono={"search"} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default Header

