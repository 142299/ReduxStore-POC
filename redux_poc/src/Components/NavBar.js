import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import { Nav, Navbar } from'react-bootstrap';

function NavBar(){
    return(
 
<Navbar bg="light" variant="light">
                <Nav className="mr-auto">
                    <Navbar.Brand><Link to="/">home</Link></Navbar.Brand>
                    <Navbar.Brand><Link to="/form">Form</Link></Navbar.Brand>
                    <Navbar.Brand><Link to="/about">AboutUs</Link></Navbar.Brand>
                </Nav>
            </Navbar>

    )
}
export default NavBar;