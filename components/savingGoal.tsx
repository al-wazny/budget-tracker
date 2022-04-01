import React from "react";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

const SavingGoal: React.FC = () => {
    return (
        <div className={styles.card + " container"}>
            <h2>REMAINING UNTIL GOAL</h2>
            <div>
                <p>2489.73$</p>
                <FontAwesomeIcon
                    className={styles.icon}
                    icon={faArrowAltCircleRight}
                />
            </div>
        </div>
    );
};

export default SavingGoal;
