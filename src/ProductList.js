import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class ProductList extends Component {
  
    render() {
    return (
      <div>
        <h3>
          {this.props.info.title}-{this.props.currentCategory}
        </h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Price</th>
              <th>Quantity / Unit</th>
              <th>Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">1</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
                <td><Button onClick={()=>this.props.addToCart(product)} variant="info">Add to cart</Button>{' '}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
