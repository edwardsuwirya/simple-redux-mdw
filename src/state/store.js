import {createStore} from 'redux';
import {rootReducer} from './rootReducer';

export const configureStore = () => {
    return createStore(rootReducer());
}
