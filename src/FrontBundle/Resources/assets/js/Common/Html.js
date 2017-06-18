import React from 'react';

/**
 * Common Html elements
 * - Title (h1, h2, h3, h4)
 * - Hero
 */
export const Hero = (props) => {
    return (
        <header className="hero is-success is-bold">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <Title heading={'h1'} className={'title'}>
                        {props.children}
                    </Title>
                </div>
            </div>
        </header>
    )
};

export const ColumnsSection = (props) => {
    return (
        <section className="section">
            <div className="container">
                <div className="columns">
                    {props.children}
                </div>
            </div>
        </section>
    )
};

export const Column = (props) => {
    return (
        <div className="column">
            {props.children}
        </div>
    )
};

export const Box = (props) => {
    return (
        <div className="box">
            <article className="media">
                <div className="media-content">
                    <div className="content">
                        {props.children}
                    </div>
                </div>
            </article>
        </div>
    )
};

export const Title = (props) => {
    let htmlClassName = (props.className)
        ? props.className
        : '';

    switch(props.heading) {
        case 'h1': {
            return <h1 className={htmlClassName}>{props.children}</h1>;
        }
        case 'h2': {
            return <h2 className={htmlClassName}>{props.children}</h2>;
        }
        case 'h3': {
            return <h3 className={htmlClassName}>{props.children}</h3>;
        }
        case 'h4': {
            return <h4 className={htmlClassName}>{props.children}</h4>;
        }
    }
};
