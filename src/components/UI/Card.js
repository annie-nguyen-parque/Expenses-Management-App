import './Card.css'

// Card is a shell component
// contains duplicate CSS codes of multiple components
function Card(props) {
    const classes = 'card ' + props.className; // NOTE: space after 'card'

    return <div className={classes}>{props.children}</div>;
}

export default Card;