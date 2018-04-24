import React, { Component } from 'react';
// import Item from './Item';

class ListItemComponent extends Component {
    render() {
        console.log(this.props.editForm);
        const frmEdit = (this.props.editForm.showForm) ? 
            <form>
                <input></input>
                <button>Submit Edit</button>
            </form> 
            : '' ;

        return (
        <div className="wrap-list-item">
            <ul>
                {frmEdit}
                {this.props.ListItem}
            </ul>
        </div>
        );
    }
}


export default ListItemComponent;
