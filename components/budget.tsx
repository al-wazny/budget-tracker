import React from "react";
import styles from "../styles/Home.module.css";

const Budget: React.FC = () => {
  return (
    <div className={styles.budget + " container"}>
      <div>
        <p>BUDGET: </p>
        <p>-123.435.42$</p>
      </div>
    </div>
  );
};

export default Budget;
