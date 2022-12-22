import studentApi from "../../api/studentApi";
import {STUDENT_ADD_REQUESTED, STUDENT_LIST_REQUESTED} from "../../constants";
import {failAddStudent, startAddStudent, successAddStudent} from "./studentAddAction";
import {failListStudent, startListStudent, successListStudent} from "./studentListAction";
import {buffers} from 'redux-saga';
import {call, put, take, actionChannel, takeLatest} from 'redux-saga/effects';

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


// function* postStudentWatcher() {
//     yield takeLatest(STUDENT_ADD_REQUESTED, postStudentApiWorker);
// }

/*
ActionChannel Saga
actionChannel can buffer incoming messages
By default, actionChannel buffers all incoming messages without limit
none = no buffer
fixed(limit) = buffer fix with limit
expanding(initialSize) = same as fix, when overflow, expand dynamically
dropping(limit) = same as fix, when overflow, drop request
sliding(limit) = same as fix, when overflow, add new request at the end, and drop the oldest request
 */

function* watchPostStudentRequests() {
    const postStudentRequestChan = yield actionChannel(STUDENT_ADD_REQUESTED, buffers.expanding(1));
    while (true) {
        const action = yield take(postStudentRequestChan)
        yield call(postStudentApiWorker, action)
    }
}

function* getStudentWatcher() {
    yield takeLatest(STUDENT_LIST_REQUESTED, listStudentApiWorker);
}

export const studentSaga = [
    watchPostStudentRequests, getStudentWatcher
]