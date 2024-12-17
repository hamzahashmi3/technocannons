import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar, NavDropdown,Nav} from 'react-bootstrap'
import './Header.css';


function Header() {
    
    return (
        <div>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="bg-dark text-white sticky-top">
            <div className="container">
            <Navbar.Brand to="/"><Link to="/" className="text-white mr-5"><img src="img/TC-logo.png" className="img-fluid" alth="TC-logo-1-W" style={{height:"66px"}}/></Link></Navbar.Brand>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav bg-dark text-white">

                <Nav className="mr-auto px-5 bg-dark">
                <Nav.Link to="/" className="mt-1 nav-links nav-item"><Link to="/" className="text-white"><small>Home</small></Link></Nav.Link>

                <NavDropdown title="Company" id="collasible-nav-dropdown" className="text-dark mt-1 small">
                    <NavDropdown.Item to="/about" className="text-dark"><Nav.Link to="/about" className="nav-links nav-item text-dark"><Link to="/about" className="text-dark small">About</Link></Nav.Link></NavDropdown.Item>
                    <NavDropdown.Item to="/whyus"><Nav.Link to="/whyus" className="nav-links nav-item text-dark"><Link to="/whyus" className="text-dark small">Why Choose Us</Link></Nav.Link></NavDropdown.Item>
                    <NavDropdown.Item to="/team" className="text-dark"><Nav.Link to="/team" className="nav-links nav-item"><Link to="/team" className="text-dark">Our Team</Link></Nav.Link></NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Services" id="collasible-nav-dropdown" className=" bg-dark mt-1 small">
                    <NavDropdown.Item to="/logodesign" className="text-dark"><Nav.Link to="/logodesign" className="nav-links nav-item text-dark"><Link to="/logodesign" className="text-dark small">Logo Designing</Link></Nav.Link></NavDropdown.Item>
                    {/* <NavDropdown.Item to="/graphicdesign" className="text-dark"><Nav.Link to="/graphicdesign" className="nav-links nav-item text-dark"><Link to="/graphicdesign" className="text-dark small">Graphic Designing</Link></Nav.Link></NavDropdown.Item> */}
                    <NavDropdown.Item to="/contentwriting" className="text-dark"><Nav.Link to="/contentwriting" className="nav-links nav-item text-dark"><Link to="/contentwriting" className="text-dark small">Content Writing</Link></Nav.Link></NavDropdown.Item>
                    <NavDropdown.Item to="/wevdev" className="text-dark"><Nav.Link to="/wevdev" className="nav-links nav-item text-dark"><Link to="/webdev" className="text-dark small">Web Design & Development</Link></Nav.Link></NavDropdown.Item>
                    <NavDropdown.Item to="/graphicdesign" className="text-dark"><Nav.Link to="/graphicdesign" className="nav-links nav-item text-dark"><Link to="/digitalmarketing" className="text-dark small">Digital Marketing</Link></Nav.Link></NavDropdown.Item>
                    <NavDropdown.Item to="/socialmedia" className="text-dark"><Nav.Link to="/socialmedia" className="nav-links nav-item text-dark"><Link to="/socialmedia" className="text-dark small">Social Media Management</Link></Nav.Link></NavDropdown.Item>

                </NavDropdown>

                <Nav.Link to="/projects" className="mt-1 nav-links nav-item"><Link to="/projects" className="text-white small">Projects</Link></Nav.Link>
                <Nav.Link to="/blog" className="mt-1 nav-links nav-item"><Link to="/blog" className="text-white small">Blog</Link></Nav.Link>
                <Nav.Link to="/contactus" className="mt-1 nav-links nav-item"><Link to="/contactus" className="text-white small">Contact</Link></Nav.Link>
                </Nav>

                <Nav className="bg-dark pl-5">

                <Nav.Link to="/login" className="nav-links nav-item mt-2"><Link to="/login" className="text-white small">Login</Link></Nav.Link>

                </Nav>

            </Navbar.Collapse>
            </div>
            </Navbar>
          
        </div>
    )
}

export default Header
