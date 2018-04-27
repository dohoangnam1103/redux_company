import React, { Component } from 'react';

class SearchComponent extends Component {

    render() {
        return (
            <div>
                <form className='search-form' onSubmit={this.props.submitForm}>
                    <input 
                        value={this.props.valueInput} 
                        onChange={this.props.changeForm}>
                    </input>
                    <button type='submit'>Search</button>
                </form>
                <button onClick={this.props.resetForm}>Reset Search</button>
            </div>
            
        );
    }
}

export default SearchComponent;
