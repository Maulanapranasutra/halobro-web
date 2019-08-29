/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

import { NavLink } from 'react-router-dom';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { style, isSticky } = this.props;
    return (
      <header
        className={isSticky ? `header bg-nav shadow-sm sticky` : `header`}
        style={style}
      >
        <div className="container main-menu">
          <Navbar light expand="md">
            <NavbarToggler onClick={this.toggle} />

            <NavbarBrand href="/">
              <img
                className="logo-twis"
                src="../../public/img/home/halobro-logo-02.png"
                alt=""
              />
            </NavbarBrand>

            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav
                className="ml-auto d-flex align-items-center"
                navbar
                style={{ paddingRight: '143px' }}
              >
                <NavItem style={{ paddingRight: '80px' }}>
                  <NavLink to="/">About Us</NavLink>
                </NavItem>
                <NavItem style={{ paddingRight: '80px' }}>
                  <NavLink to="/">Pricing</NavLink>
                </NavItem>
                <NavItem style={{ paddingRight: '80px' }}>
                  <NavLink to="/careers">Contact Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/contact">Get Started</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </header>
    );
  }
}
