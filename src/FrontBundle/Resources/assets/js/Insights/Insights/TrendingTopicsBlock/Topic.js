import React from 'react';
import TopicDetail from "./TopicDetail";

class Topic extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            showModal: false,
            requested_topic_key: ''
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal(key) {
        console.log(key);
        this.setState({
            showModal: true,
            requested_topic_key: key
        });
    }

    handleCloseModal() {
        this.setState({
            showModal: false,
            requested_topic_key: ''
        });
    }

    render() {
        return (
            <tr onClick={() => this.handleOpenModal(this.props.topic.key)}
                data-key={this.props.topic.key}>
                <td width="60%">
                    <b>{this.props.index + 1}</b> {this.props.topic.key}
                </td>
                <td className="has-text-right">
                    {this.props.topic.doc_count}
                </td>

                {/*Topic detailed evolution*/}
                <TopicDetail
                    requestedTopic={this.state.requested_topic_key}
                    onCloseModal={this.handleCloseModal}
                    modalState={this.state.showModal}
                />
            </tr>
        )
    }
}

export default Topic;