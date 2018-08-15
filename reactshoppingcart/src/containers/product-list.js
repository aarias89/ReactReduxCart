import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductList extends Component {
  renderList() {
    return this.props.productItems.map( (item) => {
      return (
        <li  key={item.id} className="list-group-item">
           <h3>Details for:</h3>
           <div> Name: {item.name} </div>
           <div> Style: {item.style} </div>
           <div> Color: {item.color[0]} </div>
           <div> Price: ${item.price} </div>
           <div> Size: {item.size[2]} </div>
           <div> QTY: {item.quantity} </div>
        </li>
      );
    })
  }

  render() {
    return (
        <ul className="list-group col-lg-4">
          {this.renderList()}
        </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    productItems: state.productItems
  };
}

export default connect(mapStateToProps)(ProductList);
