import { renderToHTML } from "next/dist/server/render";
import React from "react";
import styles from "../styles/Home.module.css";

type Props = {
  amount: number;
  date: string;
  title: string;
};

//! Using this component to keep the data fetching inside another File (Ticket)

const TicketBody: React.FC<Props> = ({ amount, date, title }) => {
  var color = amount >= 0 ? "green" : "red";

  return (
    <div className={styles.ticketContainer}>
      <div className={styles.content}>
        <div className={styles.row}>
          <h3>{title}</h3>
          <h3 style={{ color: color }}>{amount}</h3>
        </div>
        <p className={styles.date}>{date}</p>
      </div>
    </div>
  );
};

export default TicketBody;
