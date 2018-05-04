import React, { Component } from 'react';

class EditFormComponent extends Component {

    constructor (props) {
        super(props);
        this.state = {
            valueInput : ''
        }           
    }

    handleChangeInput = (e) => {
        this.setState({
            valueInput: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.hideForm();
        this.setState({
            valueInput: ''
        })
        this.props.editItem(this.props.valueEdit.id, this.state.valueInput, this.props.valueEdit.status);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.valueEdit !== undefined && nextProps.valueEdit !== '') {
            this.setState({
                valueInput: nextProps.valueEdit.name
            })
        }
    }

    render() {
        const frmEdit = (this.props.showForm) ? 
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.valueInput} onChange={(e)=>this.handleChangeInput(e)}></input>
                <button>Submit Edit</button>
            </form> 
            : '' ;

        return (
        <div className="wrap-form-edit">
            {frmEdit}
        </div>
        );
    }
}


export default EditFormComponent;
