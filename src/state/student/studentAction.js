import {STUDENT_ADD} from "../../constants";

export const addStudent = (student) => {
    return {
        type: STUDENT_ADD,
        payload: student
    }
}
export const getStudent = () => {
    return {
        type: STUDENT_ADD,
    }
}
