import {STUDENT_ADD_FINISHED, STUDENT_ADD_FAILED, STUDENT_ADD_STARTED} from "../../constants";

export const startAddStudent = () => {
    return {
        type: STUDENT_ADD_STARTED,
    }
}
export const finishAddStudent = (student) => {
    return {
        type: STUDENT_ADD_FINISHED,
        payload: {
            student
        }
    }
}
export const failAddStudent = (error) => {
    return {
        type: STUDENT_ADD_FAILED,
        payload: {
            error
        }
    }
}
