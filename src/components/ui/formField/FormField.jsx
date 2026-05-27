import styles from "./formField.module.sass";
import { useState, useEffect, useRef } from "react";

const FormField = ({
  type,
  id,
  name,
  value,
  onChange,
  onBlur,
  options,
  label,
  placeholder,
  error,
  checked,
  className,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (type == "text" && value !== "") {
      setIsFocused(true);
    }
  }, [type, value]);

  const handleFocus = () => {
    if (type === "text") {
      setIsFocused(true);
    }
  };

  const handleBlur = (e) => {
    if (type === "text" && e.target.value === "") {
      setIsFocused(false);
    }
    onBlur && onBlur(e);
  };

  const styleField = `${styles.field} ${styles[type]} ${className ? styles[className] : ""}`;
  const styleError = `${error ? styles.error : ""}`;
  switch (type) {
    case "select":
      return (
        <div className={`${styleField} ${styleError}`}>
          {label && (
            <label htmlFor={id} className={styles["field-label"]}>
              {label}
            </label>
          )}
          <div className={styles["field-inside"]}>
            <select
              name={name}
              id={id}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              className={styles["field-input"]}
            >
              {options?.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <span className={`${styles["field-icon"]} icon-down`}></span>
          </div>
          {error && <span className={styles["field-error"]}>{error}</span>}
        </div>
      );
    case "checkbox":
      return (
        <div className={`${styleField} ${styleError}`}>
          {label && (
            <label htmlFor={id} className={styles["field-label"]}>
              {label}
            </label>
          )}
          <div className={styles["field-inside"]}>
            <input
              type={type}
              id={id}
              name={name}
              checked={checked}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              className={styles["field-check-radio"]}
            />
            <label className={styles["checkbox-label"]} htmlFor={id}>
              {placeholder}
            </label>
          </div>
          {error && <span className={styles["field-error"]}>{error}</span>}
        </div>
      );
    default:
      return (
        <div
          className={`${styleField} ${styleError} ${isFocused ? styles["---focus"] : ""}`}
        >
          {label && (
            <label htmlFor={id} className={styles["field-label"]}>
              {label}
            </label>
          )}
          <div className={styles["field-inside"]}>
            <input
              ref={inputRef}
              type={type}
              name={name}
              id={id}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              className={styles["field-input"]}
            />
          </div>
          {error && <span className={styles["field-error"]}>{error}</span>}
        </div>
      );
  }
};

export default FormField;
