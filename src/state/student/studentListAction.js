import {STUDENT_LIST_FAILED, STUDENT_LIST_FINISHED, STUDENT_LIST_STARTED} from "../../constants";

export const startListStudent = () => {
    return {
        type: STUDENT_LIST_STARTED,
    }
}
export const finishListStudent = (students) => {
    return {
        type: STUDENT_LIST_FINISHED,
        payload: {
            students
        }
    }
}
export const failListStudent = (error) => {
    return {
        type: STUDENT_LIST_FAILED,
        payload: {
            error
        }
    }
}
