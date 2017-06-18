import React from 'react';
import Trend from 'react-trend';
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
                    <b>#{this.props.index + 1}</b> {this.props.trend.name}
                </td>
                <td>
                    <Trend
                        smooth
                        autoDraw
                        autoDrawDuration={2200}
                        autoDrawEasing="ease-out"
                        data={this.props.trend.data}
                        gradient={['#09fb7b', '#0dbd30']}
                        radius={17}
                        strokeWidth={2.8}
                        strokeLinecap={'round'}
                    />
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