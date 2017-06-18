import React from 'react';
import TopicDetail from "./TopicDetail";

class Topic extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <tr onClick={this.handleOpenModal}>
                <td width="60%">
                    <b>{this.props.index + 1}</b> {this.props.topic.key}
                </td>
                <td className="has-text-right">
                    {this.props.topic.doc_count}
                </td>

                {/*Topic detailed evolution*/}
                <TopicDetail
                    onCloseModal={this.handleCloseModal}
                    modalState={this.state.showModal}
                />
            </tr>
        )
    }
}

export default Topic;