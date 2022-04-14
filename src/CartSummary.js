import React, { Component } from "react";
import {Link} from "react-router-dom"
import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Badge,
  NavItem,
  NavLink
} from "reactstrap";

export default class CartSummary extends Component {
  renderSummary() {
    return (
    <UncontrolledDropdown nav inNavbar>
    <DropdownToggle nav caret>
      Your Cart - {this.props.cart.length}
    </DropdownToggle>
    <DropdownMenu end>
      {this.props.cart.map((cartItem) => (
        <DropdownItem key={cartItem.product.id}>
          {cartItem.product.productName}{" "}
          <Badge color="success">{cartItem.quantity}</Badge>
          <Badge color="danger" onClick={()=>this.props.removeFromCart(cartItem.product)}>X</Badge>
        </DropdownItem>
      ))}

      <DropdownItem>Option 2</DropdownItem>
      <DropdownItem divider />
      <DropdownItem>
          <Link to="cart">Go to cart</Link>
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>)
  }
  renderEmpty(){
      return (
      <NavItem>
          <NavLink>Empty Cart</NavLink>
      </NavItem>
      )
      
  }
  render() {
    return (
      <div>
          {this.props.cart.length>0?this.renderSummary():this.renderEmpty()}
      </div>
    );
  }
}
