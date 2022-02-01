import type { NextPage } from 'next'
import { Component, ReactElement } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from '../components/banner'
import SavingGoal from '../components/savingGoal'

const Home: NextPage = () => {
  return (
    <div className={styles.body}>
      <Banner />
      <SavingGoal />
    </div>
  );
}

export default Home
