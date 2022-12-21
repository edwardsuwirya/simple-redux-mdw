import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const configureStore = () => {
    const store = createStore(rootReducer(), applyMiddleware(...middlewares));
    sagaMiddleware.run(rootSaga);
    return store;
}

export default configureStore;