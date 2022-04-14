import React from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  NavbarToggler,
  NavLink,
  Collapse,
} from "reactstrap";
import { Link } from "react-router-dom";
import CartSummary from "./CartSummary";

export default class Navi extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Northwind App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/form1">Form 12 Demo</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/form2">Form 2 Demo</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Index</NavLink>
              </NavItem>
              <CartSummary
                removeFromCart={this.props.removeFromCart}
                cart={this.props.cart}
              ></CartSummary>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
