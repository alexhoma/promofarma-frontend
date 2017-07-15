import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            requestValue: '',
        };
    }

    handleChange(e) {
        const self = this;

        this.setState({
            requestValue: e.target.value
        }, function() {
            self.performSearch();
        });
    }

    performSearch() {
        if(this.state.value !== '') {
            this.props.onSearchAction(this.state.requestValue);
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