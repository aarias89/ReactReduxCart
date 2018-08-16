import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectedItem extends Component {
  render() {
    if (!this.props.item) {
      return <div></div>
    }

    return (
      <div>
         <h2>This is supposed to be a modal</h2>
         <h3>Where I can edit the item's properties</h3>
         <div> Name: {this.props.item.name} </div>
         <div> Price: {this.props.item.price} </div>
         <div> Color: {this.props.item.color} </div>
         <div> Size: {this.props.item.size} </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    item: state.selectedItem
  };
}

export default connect (mapStateToProps)(SelectedItem);
