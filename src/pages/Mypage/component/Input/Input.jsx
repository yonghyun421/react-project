import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Input.style.css";
import { AiTwotoneEye, AiTwotoneEyeInvisible } from "react-icons/ai";

function Input({ type, value, onChange, invalid, invalidText, placeholder }) {
  const [inputType, setInputType] = useState(type);
  const [isVisible, setIsVisible] = useState(false);
  // 눈알 on/off 토글
  const toggleVisibility = () => {
    setIsVisible(prev => !prev);
    setInputType(prevType => (prevType === "password" ? "text" : "password"));
  };

  return (
    <div className="input--area">
      <input
        type={inputType}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={invalid ? "invalid" : ""}
      />
      {type === "password" && (
        <button
          type="button"
          onClick={toggleVisibility}
          className="toggle-visibility">
          {isVisible ? <AiTwotoneEyeInvisible /> : <AiTwotoneEye />}
        </button>
      )}
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
