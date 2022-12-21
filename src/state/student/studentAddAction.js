import {STUDENT_ADD_FAILED, STUDENT_ADD_FINISHED, STUDENT_ADD_REQUESTED, STUDENT_ADD_STARTED} from "../../constants";


export const requestAddStudent = (student) => {
    return {
        type: STUDENT_ADD_REQUESTED,
        payload: {
            student
        }
    }
}

export const startAddStudent = () => {
    return {
        type: STUDENT_ADD_STARTED,
    }
}
export const successAddStudent = (newStudent) => {
    return {
        type: STUDENT_ADD_FINISHED,
        payload: {
            student: newStudent
        }
    }
}

// export const callPostStudentApi = (data) => {
//     const {studentPost} = studentApi();
//     return apiAction({
//         url: () => studentPost(data),
//         onLoading: startAddStudent,
//         onSuccess: successAddStudent,
//         onFailure: failAddStudent
//     });
// }

export const failAddStudent = (error) => {
    return {
        type: STUDENT_ADD_FAILED,
        payload: {
            error
        }
    }
}
