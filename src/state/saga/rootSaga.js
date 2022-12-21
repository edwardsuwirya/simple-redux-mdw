import {all, spawn} from 'redux-saga/effects';
import {studentSaga} from "../student/studentSaga";

function* rootSaga() {
    const sagas = [
        ...studentSaga
    ]
    /*
      rootSaga akan melakukan terminate apabila terjadi error di salah satu
      child effect, dan harus memastikan semua di handle error (try-catch)
      Spawn adalah salah satu effect, yang akan melakukan disconnect apabila
      salah satu child terjadi error.

   */
    yield all(
        sagas.map(saga => spawn(saga))
    );
}

export default rootSaga;