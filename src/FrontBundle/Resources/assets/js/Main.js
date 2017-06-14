import React from 'react';

/**
 * Base template class
 * This component wraps all pages
 */
class Main extends React.Component {
    render() {
        return (
            <main>
                {React.cloneElement(this.props.children, this.props)}
            </main>
        )
    }
}

export default Main;