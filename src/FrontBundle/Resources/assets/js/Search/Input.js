import React from 'react';
import axios from 'axios';
import { BASE_URL } from '../config';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: '',
        };
    }

    handleChange(e) {
        const self = this;

        this.setState({
            value: e.target.value
        }, function() {
            self.performSearch();
        });
    }

    performSearch() {
        const self = this;
        const url = BASE_URL + '/search-data';

        if(this.state.value !== '') {
            axios.get(url).then(function(response) {
                self.props.onSearchAction(response.data.msg)
            });
        }
    }

    render() {
        return (
            <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <input className="input is-large" type="text"
                           placeholder="Search a topic"
                           onChange={this.handleChange}/>
                    <span className="icon is-left">
                      <i className="fa fa-search"/>
                    </span>
                </p>
            </div>
        );
    }
}

export default Input;