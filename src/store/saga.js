import {call, put, takeEvery} from 'redux-saga/effects'
import {actionTypes, setAllRepositories} from "./actions";
import {getRepositories, trackRepository} from "../constants/api.constants";

const fetchAllRepositoriesEffect = function* (action) {
    try {
        const response = yield call(getRepositories, action.payload);
        yield put(setAllRepositories(response));
    } catch (error) {
        console.error('saga error', error);
    }
};

const trackRepositoryEffect = function* (action) {
    try {
        const repository = parseRepository(action.payload)
        yield call(trackRepository, repository);
    } catch (error) {
        console.error('saga error', error);
    }
};

const parseRepository = (row) => {
    return {
        repoId: row.id,
        owner: row.owner.login,
        name: row.name,
        description: row.description,
        language: row.language,
        openIssues: row.open_issues_count,
        defaultBranch: row.default_branch,
        url: row.html_url,
        createdAt: row.created_at,
        updatedAt: row.updated_at
    }
}

export const coreSaga = function* () {
    yield takeEvery(actionTypes.getAllRepositoriesAction, fetchAllRepositoriesEffect);
    yield takeEvery(actionTypes.trackRepositoryAction, trackRepositoryEffect);
};