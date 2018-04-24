import React, { Component } from 'react';

class ItemComponent extends Component {
    
    render() {
        return (
        <li  className={this.props.classStyle}>
            <p onClick={()=> this.props.handleClick(this.props.idItem)}>{this.props.dataShow}</p>
            <button className='btn-delete' onClick={() => this.props.deleteItem(this.props.idItem)}>Delete</button>
            <button className='btn-edit' onClick={() => this.props.editItem(this.props.idItem)}>Edit</button>
        </li>
        );
    }
}

export default ItemComponent;
