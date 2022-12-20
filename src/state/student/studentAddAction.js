import {STUDENT_ADD_FAILED, STUDENT_ADD_FINISHED, STUDENT_ADD_STARTED} from "../../constants";
import studentApi from "../../api/studentApi";

export const startAddStudent = () => {
    return {
        type: STUDENT_ADD_STARTED,
    }
}
export const callPostStudentApi = async (dispatch, student) => {
    const {studentPost} = studentApi();
    dispatch(startAddStudent());
    try {
        const newStudent = await studentPost(student);
        dispatch({
            type: STUDENT_ADD_FINISHED,
            payload: {
                student: newStudent
            }
        })
    } catch (e) {
        dispatch(failAddStudent(e));
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

export const postStudent = dispatch => {
    return student => callPostStudentApi(dispatch, student);
}