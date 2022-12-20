import {connect} from "react-redux";
import {useEffect} from "react";
import {callListStudentApi} from "../../../state/student/studentListAction";

const StudentList = (props) => {
    const {studentList, callListStudentApi} = props;

    useEffect(() => {
        callListStudentApi();
    }, [])
    const onGetStudent = () => {
        let sList = [];
        for (let s of studentList.students) {
            sList.push((
                <div>{s.name} {s.age}</div>
            ))
        }
        return sList;

    }
    return (
        <div>
            {studentList.loading && <div>Loading</div>}
            {onGetStudent()}
        </div>
    )
}
const mapDispatchToProps = {
    callListStudentApi
}
const mapStateToProps = state => {
    return {studentList: state.studentListReducer};
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);