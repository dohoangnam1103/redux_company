import React, { Component } from 'react';

class ItemComponent extends Component {
    
    render() {
        return (
        <li  className={this.props.classStyle}>
            <p onClick={()=> this.props.handleClick(this.props.idItem)}>{this.props.dataShow}</p>
            <button onClick={() => this.props.deleteItem(this.props.idItem)}>Delete</button>
        </li>
        );
    }
}

export default ItemComponent;
