import React from 'react';

class SearchEngine extends React.Component {
    render() {
        return (
            <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <input className="input is-large" type="text"
                           placeholder="Search a topic" />
                    <span className="icon is-left">
                  <i className="fa fa-search"/>
                </span>
                </p>
            </div>
        );
    }
}

export default SearchEngine;