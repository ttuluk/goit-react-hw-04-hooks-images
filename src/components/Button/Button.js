import React from "react";
import styles from "./Button.module.css";

const Button = ({ title, onClickLoad }) => {
  return (
    <>
      <button type="button" className={styles.button} onClick={onClickLoad}>
        {title}
      </button>
    </>
  );
};
export default Button;
