import React from 'react';

class LatestPost extends React.Component {
    constructor(props) {
        super(props);
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
                            <small className="is-primary">{created_at} · </small>
                            <small>Source: <a href="#">{source}</a></small>
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}

export default LatestPost;