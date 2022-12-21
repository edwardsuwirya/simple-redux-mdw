import studentApi from "../../api/studentApi";
import {STUDENT_ADD_REQUESTED, STUDENT_LIST_REQUESTED} from "../../constants";
import {failAddStudent, startAddStudent, successAddStudent} from "./studentAddAction";
import {failListStudent, startListStudent, successListStudent} from "./studentListAction";
import {call, put, takeLatest} from 'redux-saga/effects';

function* callPostStudentApi(action) {
    const {studentPost} = studentApi();
    yield put(startAddStudent());
    try {
        const newStudent = yield call(studentPost, action.payload.student);
        yield put(successAddStudent(newStudent));
    } catch (e) {
        console.log(e);
        yield put(failAddStudent(e));
    }
}

function* callListStudentApi() {
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
    yield takeLatest(STUDENT_ADD_REQUESTED, callPostStudentApi);
}

function* getStudentWatcher() {
    yield takeLatest(STUDENT_LIST_REQUESTED, callListStudentApi);
}

export const studentSaga = [
    postStudentWatcher, getStudentWatcher
]