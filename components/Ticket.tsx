import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/clientApp";
import styles from "../styles/Home.module.css";
import TicketBody from "../components/TicketBody";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

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
    const [swag, setSwag] = useState([{}]);
    // TODO add loading state for ticket container
    const collectionRef = collection(db, "users");

    useEffect(() => {
        const getUsers = async () => {
            const blub = await getDocs(collectionRef);
            blub.docs.forEach((doc) =>
                setSwag([{ ...doc.data(), id: doc.id }])
            );
        };

        getUsers();
    }, []);

    return swag.map((lbub) => {
        //destructur current object and use its data
        const { id, username, password, uuid } = lbub;
        console.log(lbub);
        return (
            <>
                <TicketBody
                    key={id} // TODO find better key than the title
                    amount={username}
                    date={password}
                    title={uuid}
                />
            </>
        );
    });
};

export default Ticket;
