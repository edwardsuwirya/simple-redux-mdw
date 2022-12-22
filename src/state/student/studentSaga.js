import studentApi from "../../api/studentApi";
import {STUDENT_ADD_REQUESTED, STUDENT_LIST_REQUESTED} from "../../constants";
import {failAddStudent, startAddStudent, successAddStudent} from "./studentAddAction";
import {failListStudent, startListStudent, successListStudent} from "./studentListAction";
import {call, put, takeLatest} from 'redux-saga/effects';

function* postStudentApiWorker(action) {
    const {studentPost} = studentApi();
    yield put(startAddStudent());
    try {
        /*
            call(asyncFn, ...parameter) = execute async function
         */
        const newStudent = yield call(studentPost, action.payload.student);
        /*
            put(redux_action) = dispatch action
         */
        yield put(successAddStudent(newStudent));
    } catch (e) {
        yield put(failAddStudent(e));
    }
}

function* listStudentApiWorker() {
    const {studentGet} = studentApi();
    yield put(startListStudent());
    try {
        const listStudent = yield call(studentGet);
        yield put(successListStudent(listStudent));
    } catch (e) {
        yield put(failListStudent(e));
    }
}

function* postStudentWatcher() {
    yield takeLatest(STUDENT_ADD_REQUESTED, postStudentApiWorker);
}

function* getStudentWatcher() {
    yield takeLatest(STUDENT_LIST_REQUESTED, listStudentApiWorker);
}

export const studentSaga = [
    postStudentWatcher, getStudentWatcher
]