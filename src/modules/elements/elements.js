import React from 'react';
import styles from './elements.module.scss'
import {Link} from "react-router-dom";
import {paths} from "../../routes/routes";

const Elements = ({repository}) => {
    return (
        <Link className={styles.card} to={`${paths.viewRepositoryBase}/${repository.id}`}>
            <p>Owner: {repository.owner.login}</p>
            <p>Name: {repository.name}</p>
            <p>Description: {repository.description ? repository.description : 'No description'}</p>
        </Link>
    );
};

export default Elements;