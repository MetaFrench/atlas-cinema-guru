import './general.css';
import PropTypes from 'prop-types';

function Button({ label, type='button', className, onClick, icon }) {
  return (
    <button type={type} className={className} onClick={onClick}>
      {icon && icon}
      <label>{label}</label>
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.element
}

export default Button;