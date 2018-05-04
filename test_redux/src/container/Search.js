import React, { Component } from 'react';
import SearchComponent from '../component/SearchComponent';
import { actSearch, actResetSearch } from '../actions/index';
import { connect } from 'react-redux';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentSearch : this.props.keySearch
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.changeValueSearch(this.state.contentSearch)
    }
    
    handleChangeData = (e) => {
        this.setState({
            contentSearch : e.target.value
        });
        if (e.target.value === ''){
            this.props.resetValueSearch();
        }
    } 

    handleResetSearch = () => {
        this.props.resetValueSearch();
        this.setState({
            contentSearch : ''
        })
    }

    render() {
        return (
            <SearchComponent
                submitForm={this.handleSubmit}
                valueInput={this.state.contentSearch}
                changeForm={this.handleChangeData}
                resetForm={this.handleResetSearch}
                >
            </SearchComponent>

            // <div>
            //     <form className='search-form' onSubmit={this.handleSubmit}>
            //         <input 
            //             value={this.state.contentSearch} 
            //             onChange={this.handleChangeData}>
            //         </input>
            //         <button type='submit'>Search</button>
            //     </form>
            //     <button onClick={this.handleResetSearch}>Reset Search</button>
            // </div>
            
        );
    }
}

const mapStateToProps = (state) => {
    return {
        keySearch : state.Search
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        changeValueSearch : (keysearch) => {
            dispatch(actSearch(keysearch))
        },
        resetValueSearch : () => {
            dispatch(actResetSearch())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
