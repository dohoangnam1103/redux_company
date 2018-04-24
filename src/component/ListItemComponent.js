import React, { Component } from 'react';
// import Item from './Item';

class ListItemComponent extends Component {
    render() {
        return (
        <div className="wrap-list-item">
            <ul>
                {this.props.ListItem}
            </ul>
        </div>
        );
    }
}


export default ListItemComponent;
