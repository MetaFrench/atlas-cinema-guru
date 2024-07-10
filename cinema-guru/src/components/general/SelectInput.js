import './general.css';
import PropTypes from 'prop-types';

function SelectInput({ label, options, className, value, setValue }) {
  // SELECTS A NEW OPTION FROM THE LIST TO DISPLAY
  function handleSelect(event) {
    setValue(event.target.value);
  }

  return (
    <div className={className}>
      <label>{label}</label><br></br>
      <select value={value} onChange={handleSelect}>
        {options.map((option) => <option key={option.id} value={option.name}>{option.name}</option>)}
      </select>
    </div>
  )
}

SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  setValue: PropTypes.func.isRequired,
}

export default SelectInput;