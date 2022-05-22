import PropTypes from "prop-types";
import classNames from "classnames";

function Button({ label, backgroundColor= "primary", size = "md", icon = "", onClick }) {
    let btnClass = classNames(
        'button',
        {
            'button-sm': size === 'sm',
            'button-md': size === 'md',
            'button-lg': size === 'lg',
            'button-primary': backgroundColor === 'primary',
            'button-secondary': backgroundColor === 'secondary',
            'button-white': backgroundColor === 'white'
        }
    )

    return (
        <button type="button" onClick={ onClick } className={ btnClass }>
            { label }
        </button>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    backgroundColor: PropTypes.oneOf(["primary", "secondary", "white"]),
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    icon: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button;