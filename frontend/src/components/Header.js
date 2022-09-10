import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { ReactComponent as Logo } from '../images/logo.svg';

const Header = () => {
    return (
        <Navbar>
            <Container >    
            <Container style={{maxWidth:'8rem', maxHeight:'2rem'}}>
                <Logo style = {{ width: "inherit", height:"inherit"}}/>
                </Container>    
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className='mt-4'>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;