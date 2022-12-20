import {combineReducers} from 'redux';
import {studentReducer} from "./student/studentReducer";

export const rootReducer = () => {
    return combineReducers({
        studentReducer,
    })
}

