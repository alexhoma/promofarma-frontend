import React from 'react';
import axios from 'axios';

const BASE_URL = 'http://demo1293283.mockable.io';

class Input extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: '',
            dataSource: []
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
        const self = this,
              url = BASE_URL + '/data';

        if(this.state.value !== '') {
            axios.get(url).then(function(response) {
                self.setState({
                    dataSource: response.data.msg
                });
            });
        }
    }

    getRawMarkup() {
        return { __html: this.state.dataSource }
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

                <div dangerouslySetInnerHTML={this.getRawMarkup()}/>
            </div>
        );
    }
}

export default Input;