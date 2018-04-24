import React, { Component } from 'react';
import {connect} from 'react-redux';
import Item from './Item';
import ListItemComponent from '../component/ListItemComponent';

class ListItem extends Component {

    componentDidMount() {
        const linkData = 'https://5aded024bf932f0014d11afd.mockapi.io/api/v1/todo';
        fetch(linkData)
            .then(response => response.json())
            .then(data => this.props.fetData(data));
    }
  
    render() {
        let ListItem = <p>Loading data</p>;

        if (this.props.items !== null && this.props.items.length > 0 ){
            if (this.props.filter === 'all') {
                let arrayTmpSearch = this.props.items.filter(ele => ele.name.toLowerCase().includes(this.props.keySearch.toLowerCase()));
                ListItem = arrayTmpSearch.map(ele => <Item key={ele.id} idItem={ele.id} data={ele.name} status={ele.status}/>);
            } else if (this.props.filter === 'complete') {
                let arrayTmpFilter = this.props.items.filter(ele => ele.status === true);
                let arrayTmpSearch = arrayTmpFilter.filter(ele => ele.name.toLowerCase().includes(this.props.keySearch.toLowerCase()));
                ListItem = arrayTmpSearch.map(ele =>  <Item key={ele.id} idItem={ele.id} data={ele.name} status={ele.status}/>);
            } else if (this.props.filter === 'active') {
                let arrayTmpFilter = this.props.items.filter(ele => ele.status === false);
                let arrayTmpSearch = arrayTmpFilter.filter(ele => ele.name.toLowerCase().includes(this.props.keySearch.toLowerCase()));
                ListItem = arrayTmpSearch.map(ele =>  <Item key={ele.id} idItem={ele.id} data={ele.name} status={ele.status}/>);
            }
        }

        return (
            <ListItemComponent 
                ListItem={ListItem}
                editForm={this.props.editForm}
            ></ListItemComponent>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetData : (content) => dispatch({type: 'FETCH_DATA', content:content})
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        items: state.ItemReducers,
        filter: state.FilterReducer,
        keySearch: state.Search,
        editForm : state.EditReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
