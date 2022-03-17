import React from "react";
import styles from "../styles/Home.module.css";
import TicketBody from "../components/TicketBody";

type Ticket = {
  amount: number;
  date: Date;
  title: string;
}[];

//* dummy data here to test component
const data: Ticket = [
  {
    amount: 4.2,
    date: new Date(),
    title: "Samenbank",
  },
  {
    amount: -4.2,
    date: new Date(),
    title: "Pornhub",
  },
];

// TODO write API to fetch Props
//! here is the call to map over the given data on a seperate component

const Ticket = (): JSX.Element[] => {
  return data.map((ticket) => {
    //destructur current object and use its data
    const { amount, date, title } = ticket;
    return (
      <>
        <TicketBody
          key={title} // TODO find better key than the title
          amount={amount}
          date={date.toLocaleDateString()}
          title={title}
        />
      </>
    );
  });
};

export default Ticket;
