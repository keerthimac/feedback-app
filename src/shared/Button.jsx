import PropTypes from 'prop-types';

function Button({ children, type }) {
    return (
        <button className={`btn btn-${type && type}`}>
            {children}
        </button>
    )
}

//define default props for card
Button.defaultProps = {
    type: "primary"
}


Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.bool,
}

export default Button
