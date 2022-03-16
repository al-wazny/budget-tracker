import type { NextPage } from "next";
import { Component, ReactElement } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from "../components/banner";
import SavingGoal from "../components/savingGoal";
import Ticket from "../components/Ticket";
import Budget from "../components/budget";

const Home: NextPage = () => {
  return (
    <div className={styles.body}>
      <Banner />
      <SavingGoal />
      <Budget /> {/*//! give it a state of positiv or negativ */}
      <section className={styles.latestExpensesContainer + " container"}>
        <div className={styles.latestExpenses}>
          LATEST EXPENSES
          <hr />
        </div>
        <Ticket />
      </section>
    </div>
  );
};

export default Home;
