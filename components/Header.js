import React, { Component, useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarToggler
} from 'reactstrap';
import Link from 'next/link';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="dark" dark expand="md" className="fixed-top">
            <NavbarBrand href="/">
                <img src="https://therealgamestream.com/img/owl.png" height="32" alt="GAMEstream Owl" border="0" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} className="mr-2" />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Link href="/">
                            <a className="px-4 nav-link">
                                <img src="https://therealgamestream.com/img/gamestream-logo.png" height="24" alt="GAMEstream" border="0" />
                            </a>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href="/">
                            <a className="px-4 nav-link">
                                HOME
                            </a>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href="/about/">
                            <a className="px-4 nav-link">
                                ABOUT
                            </a>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href="/contact/">
                            <a className="px-4 nav-link">
                                CONTACT
                            </a>
                        </Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Header;
