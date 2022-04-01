import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const Banner: React.FC = () => {
    return (
        <header className={styles.headerComponent}>
            <FontAwesomeIcon className={styles.burgerMenu} icon={faBars} />
            <h3 className={styles.title}>BUDGET-TRACKER</h3>
        </header>
    );
}

export default Banner;  