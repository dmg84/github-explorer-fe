export const actionTypes = {
    getAllRepositoriesAction: 'GET_ALL_REPOSITORIES',
    setAllRepositoriesAction: 'SET_ALL_REPOSITORIES',
    trackRepositoryAction: 'TRACK_REPOSITORY'
};

export const getAllRepositories = (companyName) => {
    return {type: actionTypes.getAllRepositoriesAction, payload: companyName}
}

export const setAllRepositories = (repositories) => {
    return {type: actionTypes.setAllRepositoriesAction, payload: repositories}
}

export const trackRepository = (repository) => {
    return {type: actionTypes.trackRepositoryAction, payload: repository}
}

