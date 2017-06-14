import React from 'react';

class Input extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {value: ''};
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    getRawMarkup() {
        return { __html: this.state.value }
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