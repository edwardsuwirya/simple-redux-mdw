import {combineReducers} from 'redux';
import {studentAddReducer} from "./student/studentAddReducer";
import {studentListReducer} from "./student/studentListReducer";

export const rootReducer = () => {
    return combineReducers({
        studentAddReducer,
        studentListReducer,
    })
}

