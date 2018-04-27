import React, { Component } from 'react';
import {connect} from 'react-redux';
import EditFormComponent from '../component/EditFormComponent';
import { actFetchEdit } from '../actions/index';

class EditForm extends Component {
    render() {
        const valueEditForm = this.props.listItem.filter(ele => ele.id === this.props.editForm.idEdit);
        return (
        <EditFormComponent 
            showForm={this.props.editForm.showForm}
            hideForm={this.props.hidenForm}
            editItem={this.props.editItem}
            valueEdit={valueEditForm[0]}>
        </EditFormComponent>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        hidenForm : () => {
            dispatch({type : 'HIDE_EDIT_FORM'})
        },
        editItem : (id, name, status) => {
            // dispatch(actFetchEdit(id, name, status))
            dispatch({type: 'START_EDIT_ITEM', payload: {id : id, name: name, status: status}})
        }
    }
}

const mapStateToProps = state => {
    return {
        editForm : state.EditReducer,
        listItem: state.ItemReducers
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
