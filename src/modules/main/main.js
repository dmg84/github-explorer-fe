import React, {useEffect, useState} from 'react';
import {useRepositoriesReducer} from "../../store/reducer";
import styles from './main.module.scss'
import {useDispatch} from "react-redux";
import {getAllRepositories} from "../../store/actions";
import Elements from "../elements/elements";

const Main = () => {
    const dispatch = useDispatch();
    const repositories = useRepositoriesReducer();
    const [value, setValue] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        value && !repositories.length ? setError('No repositories found or the company name doesn\'t exist')
            : setError('');
        setDisabled(false)
        // eslint-disable-next-line
    }, [repositories])

    const searchCompany = () => {
        setDisabled(true)
        dispatch(getAllRepositories(value));
    }

    return (
        <>
            <div className={styles.container}>
                <input className={styles.input} type="text" name={'companyName'} value={value}
                       onChange={(e) => setValue(e.target.value)} placeholder={'Search by company name'}/>
                <button className={`${styles.btn} ${styles.marginTop}`} disabled={disabled}
                        onClick={searchCompany}>Search
                </button>
                <span className={styles.error}>{error}</span>
            </div>
            <div className={styles.containerElement}>
                {repositories.map((el, index) => <Elements key={index} repository={el}/>)}
            </div>
        </>
    );
};

export default Main;