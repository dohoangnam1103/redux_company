import React, { Component } from 'react';
import HeaderComponent from '../component/HeaderComponent';
import { connect } from 'react-redux';
import { actAddItem, actFilterAll, actFilterComplete, actFilterActive } from '../actions/index';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content : ''
        }
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.content !== '') {

            let idNext;
            if (this.props.ListItems.length !== 0) {
                idNext = Math.max(...this.props.ListItems.map(x => x.id)) + 1;
                
            } else {
                idNext = 1;
            }

            const content = this.state.content;
            const status = false;
            this.props.handleSubmitAdd(idNext, content, status);
            this.setState({
                content: ''
            })
        }
    }

    handleFilterAll = () => {
        this.props.FilterAll();
    }

    handleFilterComplete = () => {
        this.props.FilterComplete();
    }

    handleFilterActive = () => {
        this.props.FilterActive();
    }

    render() {
        return (
            <HeaderComponent 
                formSubmit={this.handleSubmit}
                changeInput={this.handleChange}
                valueInput={this.state.content}
                handleFilterAll={this.handleFilterAll}
                handleFilterComplete={this.handleFilterComplete}
                handleFilterActive={this.handleFilterActive}>
            </HeaderComponent>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ListItems : state.ItemReducers
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleSubmitAdd : (id, content, status) => {
            dispatch(actAddItem(id, content, status));
        },
        FilterAll : () => {
            dispatch(actFilterAll());
        },
        FilterComplete : () => {
            dispatch(actFilterComplete());
        },
        FilterActive : () => {
            dispatch(actFilterActive());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
