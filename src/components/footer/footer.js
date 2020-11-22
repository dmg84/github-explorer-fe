import React from 'react';
import styles from './footer.module.scss';

const footer = () => {
    return (
        <footer className={styles.footer}>
            Copyright © {new Date().getFullYear()}
        </footer>
    );
};

export default footer;