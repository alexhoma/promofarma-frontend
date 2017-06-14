import React from 'react';

class MostSpokenTopicsList extends React.Component {
    render() {
        return (
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        Component
                    </p>
                    <a className="card-header-icon">
                      <span className="icon">
                        <i className="fa fa-angle-down"/>
                      </span>
                    </a>
                </header>
                <div className="card-content">
                    <div className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris.
                        <a>@bulmaio</a>. <a>#css</a> <a>#responsive</a>
                        <br />
                        <small>11:09 PM - 1 Jan 2016</small>
                    </div>
                </div>
            </div>
        );
    }
}

export default MostSpokenTopicsList;
