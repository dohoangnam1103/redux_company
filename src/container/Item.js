import React, { Component } from 'react';
import ItemComponent from '../component/ItemComponent';
import { connect } from 'react-redux';
import { actChangeStatus, actDeleteItem } from '../actions/index';

class Item extends Component {

    changeStatus = (id) => {
        this.props.handleChangeStatus(id)
    }

    deleteItem = (id) => {
        this.props.handleDeleteItem(id)
    }

    editItem = (id) => {
        console.log(id);
    }
    
    render() {
        let classStyle = this.props.status ? 'complete' : 'active';
        return (
            <ItemComponent 
                classStyle={classStyle}
                handleClick={this.changeStatus}
                dataShow={this.props.data}
                deleteItem={this.deleteItem}
                editItem={this.editItem}
                idItem={this.props.idItem}>
            </ItemComponent>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleChangeStatus : (id) => {
            dispatch(actChangeStatus(id))
        },
        handleDeleteItem : (id) => {
            dispatch(actDeleteItem(id))
        }
    }
}

export default connect(null, mapDispatchToProps)(Item);
