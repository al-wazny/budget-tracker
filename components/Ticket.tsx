import React from "react";
import styles from "../styles/Home.module.css";

type Props = {
  expens: {};
  amount?: number;
  date?: number;
  title?: string;
};

// write API to fetch Props

const Ticket: React.FC<Props> = ({ expens }) => {
  return (
    <div className={styles.ticketContainer}>
      <div className={styles.content}>
        <div className={styles.row}>
          <h3>Pornhub</h3>
          <h3 style={expens}>-4.20</h3>
        </div>
        <p className={styles.date}>12.01.2022</p>
      </div>
    </div>
  );
};

export default Ticket;
