import './general.css';
import PropTypes from 'prop-types';

function Input({ label, type, className, value, setValue, icon, inputAttributes }) {
  // CHANGES VALUE OF INPUT -----
  function handleInput(event) {
    setValue(event.target.value);
  }

  return (
    <div className={className}>
      {icon && icon}
      <label> {label}</label><br></br>
      <input type={type} value={value} onChange={handleInput}></input>
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  setValue: PropTypes.func.isRequired,
  icon: PropTypes.element,
  inputAttributes: PropTypes.object
}

export default Input;