import {STUDENT_LIST_FAILED, STUDENT_LIST_FINISHED, STUDENT_LIST_STARTED} from "../../constants";

const studentInitialState = {
    loading: false,
    students: [],
    error: null
}

export const studentListReducer = (state = studentInitialState, action) => {
    switch (action.type) {
        case STUDENT_LIST_STARTED:
            return {...state, student: [], loading: true}
        case STUDENT_LIST_FINISHED:
            return {...state, loading: false, students: [...action.payload.students]}
        case STUDENT_LIST_FAILED:
            return {...state, loading: false, error: action.payload.error}
        default:
            return state
    }
}
