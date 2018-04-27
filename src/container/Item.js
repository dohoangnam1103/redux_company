import React, { Component } from 'react';
import ItemComponent from '../component/ItemComponent';
import { connect } from 'react-redux';
import { actFetchChangeStatus, actFetchDeleteItem } from '../actions/index';

class Item extends Component {

    changeStatus = (id) => {
        this.props.handleChangeStatus(id, this.props.data, this.props.status);
    }

    deleteItem = (id) => {
        this.props.handleDeleteItem(id)
    }

    editItem = (id) => {
        
        this.props.handleEditItem(id);

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
        handleChangeStatus : (id, name, status) => {
            // dispatch(actFetchChangeStatus(id, name, status));
            dispatch({type: 'START_CHANGE_STATUS', payload: {id : id, name: name, status: status}})
        },
        handleDeleteItem : (id) => {
            // dispatch(actFetchDeleteItem(id))
            dispatch({type: 'START_DELETE', payload : {id: id}})
        },
        handleEditItem : (id) => {
            dispatch({type: 'SHOW_EDIT_FORM', id: id})
        }
    }
}

export default connect(null, mapDispatchToProps)(Item);
