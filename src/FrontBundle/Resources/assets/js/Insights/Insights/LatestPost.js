import React from 'react';
import moment from 'moment';
import {Box, Column, ColumnsSection} from "../../Common/Html";

class LatestPost extends React.Component {
    constructor(props) {
        super(props);
    }

    toRelativeTime(date) {
        return moment(date).fromNow();
    }

    render() {
        const {
            content,
            tags,
            score,
            created_at,
            source
        } = this.props.data;

        if (content === '') {
            return false;
        }

        return (
            <Box>
                <strong>Latest Post</strong>
                <hr />
                <p>{content}</p>

                <div className="columns">
                    <Column>
                        {tags.map((tag, index) =>
                            <span key={index}
                                  className="tag is-success is-small">
                                {tag}
                            </span>
                        )}
                    </Column>
                    <Column>
                        <span className="tag is-warning is-small is-pulled-right">
                            Score <b> {score}</b>
                        </span>
                    </Column>
                </div>

                <small className="is-primary">
                    {this.toRelativeTime(created_at.date)} · </small>
                <small>Source: <a href="#">{source}</a></small>
            </Box>
        );
    }
}

export default LatestPost;