import React, { Component } from 'react';

class HeaderComponent extends Component {
  
    render() {
        return (
            <div className="wrap-header">
                <form onSubmit={this.props.formSubmit}>
                    <input value={this.props.valueInput} onChange={this.props.changeInput}></input>
                    <button type='submit'>Add</button>
                </form>
                <div className='filter-group'>
                    <button onClick={this.props.handleFilterAll}>All</button>
                    <button onClick={this.props.handleFilterComplete}>Complete</button>
                    <button onClick={this.props.handleFilterActive}>Active</button>
                </div>
            </div>
        );
    }
}

export default HeaderComponent;
