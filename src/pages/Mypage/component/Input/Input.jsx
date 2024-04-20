import React from "react";
import PropTypes from "prop-types";
import "./Input.style.css";

function Input({ type, value, onChange, invalid, invalidText, placeholder }) {
  return (
    <div className="input--area">
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {invalid && <span className="invalid--text">{invalidText}</span>}
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  invalid: PropTypes.bool,
  invalidText: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
  value: "",
  invalid: false,
  invalidText: "",
  placeholder: "",
  onChange: () => {},
};

export default Input;
