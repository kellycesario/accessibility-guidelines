import React from "react";
import styles from "./styles.module.scss";

const InputField = React.forwardRef(
  (
    {
      text,
      id,
      type,
      isCheckbox,
      onChange,
      onBlur,
      checked,
      name,
      error,
      errorId,
    },
    ref
  ) => {
    return (
      <label>
        {isCheckbox ? (
          <>
            <input
              role="checkbox"
              type="checkbox"
              id={id}
              className={styles.checkbox}
              onChange={onChange}
              checked={checked}
              ref={ref}
              name={name}
            />
            <svg
              className={`checkbox ${
                checked ? `${styles.checkbox__active}` : `${styles.checkbox}`
              }`}
              aria-hidden="true"
              viewBox="0 0 15 11"
              fill="none"
            >
              {" "}
              <path
                d="M1 4.5L5 9L14 1"
                strokeWidth="2"
                stroke={checked ? "#fff" : "none"}
              />{" "}
            </svg>
          </>
        ) : (
          <input
            aria-errormessage={errorId}
            id={id}
            type={type}
            className={`${styles.inputField} ${
              error && styles["inputField--error"]
            }`}
            ref={ref}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
          />
        )}
      </label>
    );
  }
);

export default InputField;
