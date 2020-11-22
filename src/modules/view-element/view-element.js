import React, {useEffect, useState} from 'react';
import {paths} from "../../routes/routes";
import {Link} from "react-router-dom";
import {useParams, useHistory} from "react-router-dom";
import styles from "./view-element.module.scss";
import {useRepositoriesReducer} from "../../store/reducer";
import {useDispatch} from "react-redux";
import {trackRepository} from "../../store/actions";

const ViewElement = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {id} = useParams();
    const repositories = useRepositoriesReducer();
    const [selected, setSelected] = useState(null)
    const track = () => dispatch(trackRepository(selected));

    useEffect(() => {
        if (repositories.length) {
            const found = repositories.find(el => +el.id === +id);
            found ? setSelected(found) : history.push(paths.root);
        } else {
            history.push(paths.root);
        }
        // eslint-disable-next-line
    }, [repositories])

    return (
        <>
            <div className={`${styles.container} ${styles.back}`}>
                <Link to={`${paths.root}`}>Go back</Link>
            </div>

            {selected &&
            <div className={styles.row}>
                <div className={styles.viewElementContainer}>
                    {selected.owner.avatar_url &&
                    <div className={styles.imgContainer}>
                        <img src={selected.owner.avatar_url} className={styles.img} alt={selected.owner.login}/>
                    </div>
                    }
                    <div className={styles.info}>
                        <p>Owner: {selected.owner.login}</p>
                        <p>Name: {selected.name}</p>
                        <p>Description: {selected.description ? selected.description : 'No description'}</p>
                        <p>Language: {selected.language}</p>
                        <p>Open issues: {selected.open_issues}</p>
                        <p>Default branch: {selected.default_branch}</p>
                        <p>Created at: {new Date(selected.created_at).toDateString()}</p>
                        <p>Updated at: {new Date(selected.updated_at).toDateString()}</p>
                        <p>Go to GitHub: <a href={selected.html_url}>Click here</a></p>
                        <button className={styles.btn} onClick={track}>Track</button>
                    </div>
                </div>
            </div>}
        </>)
};

export default ViewElement;