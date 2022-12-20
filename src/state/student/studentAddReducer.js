import {STUDENT_ADD_FAILED, STUDENT_ADD_FINISHED, STUDENT_ADD_STARTED} from "../../constants";

const studentInitialState = {
    loading: false,
    student: null,
    error: null
}

export const studentAddReducer = (state = studentInitialState, action) => {
    switch (action.type) {
        case STUDENT_ADD_STARTED:
            return {...state, student: null, loading: true}
        case STUDENT_ADD_FINISHED:
            return {...state, loading: false, student: action.payload.student}
        case STUDENT_ADD_FAILED:
            return {...state, loading: false, error: action.payload.error}
        default:
            return state
    }
}
