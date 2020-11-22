import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects'
import {reducer} from './reducer';
import {coreSaga} from "./saga";
import {composeWithDevTools} from 'redux-devtools-extension'

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, composeWithDevTools(
    compose(applyMiddleware(sagaMiddleware))
));

const rootSaga = function* () {
    yield all([coreSaga()])
};

sagaMiddleware.run(rootSaga);

