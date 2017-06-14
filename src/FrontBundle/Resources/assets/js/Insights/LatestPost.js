import React from 'react';

class LatestPost extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="box">
                <article className="media">
                    <div className="media-content">
                        <div className="content">
                            <strong>Latest Post</strong>
                            <hr />
                            <p>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. A ab accusamus asperiores
                            consequatur consequuntur dicta eos
                            exercitationem facere facilis.</p>
                            <small className="is-primary">Posted 31m ago · </small>
                            <small>Source: <a href="#">twitter.com</a></small>
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}

export default LatestPost;