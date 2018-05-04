import React, { Component } from 'react';
import {connect} from 'react-redux';
import Item from './Item';
import EditForm from './Edit';
import ListItemComponent from '../component/ListItemComponent';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message : 'Loading data ...'
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            message: 'Empty todo'
        })
    }
  
    render() {
        let ListItem = <p>{this.state.message}</p>;

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
            <div>
                <EditForm></EditForm>
                <ListItemComponent 
                    ListItem={ListItem}
                    
                ></ListItemComponent>
            </div>
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
