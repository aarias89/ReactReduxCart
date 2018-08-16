import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editItem } from '../actions/index';
import { bindActionCreators } from 'redux';


class ProductList extends Component {
  handleClick(item){
    console.log(item)
  }

  renderList() {
    return this.props.productItems.map( (item) => {
      return (
        <li  key={item.id} className="list-group-item">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="col-md-4">
                  <img src={item.image} alt="" width="100%" height="100%"
                  />
                </div>

                <div className="col-md-6">
                  <div> Name: {item.name} </div>
                  <div> Style: {item.style} </div>
                  <div> Color: {item.color[Math.floor(Math.random() * item.color.length)]} </div>
                  <div>
                    <button
                       type="button"
                       className="btn btn-link"
                       // onClick={this.handleClick}
                       onClick={() => this.handleClick(this.props.editItem(item))}
                       >
                       Edit
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="row" id="item-detail">
                  <div className="col-md-3">
                    <div> Size: {item.size[2]} </div>
                  </div>
                  <div className="col-md-3">
                    <div> QTY: {item.quantity} </div>
                  </div>
                  <div className="col-sm-6">
                    <div> Price: ${item.price} </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      );
    })
  }

  render() {
    return (
      <div className="container">
        <ul className="list-group">
          {this.renderList()}
        </ul>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    productItems: state.productItems
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( {editItem: editItem}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
