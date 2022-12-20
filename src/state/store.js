import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from './rootReducer';
import apiMiddleware from "./apiMiddleware";

export const configureStore = () => {
    return createStore(rootReducer(), applyMiddleware(apiMiddleware));
}
