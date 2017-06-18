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
                    <Title heading={'h1'}>
                        {props.children}
                    </Title>
                </div>
            </div>
        </header>
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
