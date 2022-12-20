import {STUDENT_LIST_FAILED, STUDENT_LIST_FINISHED, STUDENT_LIST_STARTED} from "../../constants";
import studentApi from "../../api/studentApi";

export const startListStudent = () => {
    return {
        type: STUDENT_LIST_STARTED,
    }
}
export const callListStudentApi = async (dispatch) => {
    const {studentGet} = studentApi();
    dispatch(startListStudent());
    const students = await studentGet();
    try {
        dispatch({
            type: STUDENT_LIST_FINISHED,
            payload: {
                students
            }
        })
    } catch (e) {
        dispatch(failListStudent(e));
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
export const getStudent = dispatch => {
    return () => callListStudentApi(dispatch);
}