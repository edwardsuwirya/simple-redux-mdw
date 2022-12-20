import {STUDENT_ADD_FINISHED, STUDENT_ADD_FAILED, STUDENT_ADD_STARTED} from "../../constants";
import studentApi from "../../api/studentApi";

export const startAddStudent = () => {
    return {
        type: STUDENT_ADD_STARTED,
    }
}
export const finishAddStudent = async (student) => {
    const {studentPost} = studentApi();
    const newStudent = await studentPost(student);
    return {
        type: STUDENT_ADD_FINISHED,
        payload: {
            newStudent
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
