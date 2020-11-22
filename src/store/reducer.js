import {actionTypes} from "./actions";
import {useSelector} from "react-redux";

const initialState = {
    repositories: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.setAllRepositoriesAction:
            return {...state, repositories: action.payload};
        default:
            return state;
    }
};

export const useRepositoriesReducer = () => {
    return useSelector((state) => state.repositories);
};
