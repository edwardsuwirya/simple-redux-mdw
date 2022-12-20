import {STUDENT_LIST_FAILED, STUDENT_LIST_FINISHED, STUDENT_LIST_STARTED} from "../../constants";
import studentApi from "../../api/studentApi";
import {apiAction} from "../apiAction";

export const startListStudent = () => {
    return {
        type: STUDENT_LIST_STARTED,
    }
}
export const successListStudent = (students) => {
    return {
        type: STUDENT_LIST_FINISHED,
        payload: {
            students: students
        }
    }
}
export const callListStudentApi = () => {
    const {studentGet} = studentApi();
    return apiAction({
        url: () => studentGet(),
        onLoading: startListStudent,
        onSuccess: successListStudent,
        onFailure: failListStudent
    });
}

export const failListStudent = (error) => {
    return {
        type: STUDENT_LIST_FAILED,
        payload: {
            error
        }
    }
}