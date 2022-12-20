import {STUDENT_ADD} from "../../constants";

const studentInitialState = {
    data: []
}

export const studentReducer = (state = studentInitialState, action) => {
    switch (action.type) {
        case STUDENT_ADD:
            return {data: [...state.data, action.payload]}
        default:
            return state
    }
}
