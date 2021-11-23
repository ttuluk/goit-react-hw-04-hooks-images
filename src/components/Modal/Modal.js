import React, {useEffect} from "react";
import styles from "./Modal.module.css";


export default function  Modal ({ onClose, children }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
  }, []);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };


  const handleKeyDown = (e) => {

    if (e.code === "Escape") {
      onClose();
      window.removeEventListener("keydown", handleKeyDown);
    }
  };

  return (
      <>
        <div className={styles.Overlay} onClick={handleOverlayClick}>
          <div className={styles.Modal}>{children}</div>
        </div>
      </>
  );
}
