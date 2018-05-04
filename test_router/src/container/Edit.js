import React, { Component } from 'react';
import {connect} from 'react-redux';
import EditFormComponent from '../component/EditFormComponent';
import { actHideEditForm, actStartEditItem } from '../actions/index';

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
            dispatch(actHideEditForm());
        },
        editItem : (id, name, status) => {

            dispatch(actStartEditItem(id, name, status))
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
