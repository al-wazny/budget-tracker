import type { NextPage } from "next";
import { Component, ReactElement } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from "../components/banner";
import SavingGoal from "../components/savingGoal";
import Ticket from "../components/Ticket";
const Home: NextPage = () => {
  return (
    <div className={styles.body}>
      <Banner />
      <SavingGoal />
      <Ticket expens={{ color: "red" }} />
      <Ticket expens={{ color: "green" }} />
    </div>
    /* pass color as prop to display if the expens is negativ or positiv */
  );
};

export default Home;
