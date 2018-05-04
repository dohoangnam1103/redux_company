import React, { Component } from 'react';
import ItemComponent from '../component/ItemComponent';
import { connect } from 'react-redux';
import { actStartChangeStatus, actStartDeleteItem, actShowEditForm } from '../actions/index';

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
            
            dispatch(actStartChangeStatus(id, name, status));
        },
        handleDeleteItem : (id) => {
            dispatch(actStartDeleteItem(id))

        },
        handleEditItem : (id) => {
            dispatch(actShowEditForm(id))
        }
    }
}

export default connect(null, mapDispatchToProps)(Item);
