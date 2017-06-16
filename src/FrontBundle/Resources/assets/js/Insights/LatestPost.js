import React from 'react';
import moment from 'moment';

class LatestPost extends React.Component {
    constructor(props) {
        super(props);
    }

    fromUnixToRelativeTime(date) {
        let datetime = moment
            .unix(date)
            .format("MM/DD/YYYY hh:mm:ss a");

        return moment(datetime, "MM/DD/YYYY hh:mm:ss a").fromNow();
    }

    render() {
        const {
            content,
            created_at,
            source
        } = this.props.data;

        if (content === '') {
            return false;
        }

        return (
            <div className="box">
                <article className="media">
                    <div className="media-content">
                        <div className="content">
                            <strong>Latest Post</strong>
                            <hr />
                            <p>{content}</p>
                            <small className="is-primary">
                                {this.fromUnixToRelativeTime(created_at)} · </small>
                            <small>Source: <a href="#">{source}</a></small>
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}

export default LatestPost;