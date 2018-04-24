import React, { Component } from 'react';
import {connect} from 'react-redux';
import Item from './Item';
import ListItemComponent from '../component/ListItemComponent';

class ListItem extends Component {
  render() {
    let ListItem = <p>Empty list todo</p>;

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
        <ListItemComponent ListItem={ListItem}></ListItemComponent>
    );
  }
}

const mapStateToProps = state => {
    return {
        items: state.ItemReducers,
        filter: state.FilterReducer,
        keySearch: state.Search
    }
}

export default connect(mapStateToProps, null)(ListItem);
