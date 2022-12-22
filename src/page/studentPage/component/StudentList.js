import {connect} from "react-redux";
import {useEffect} from "react";
import {requestListStudent} from "../../../state/student/studentListAction";

const StudentList = (props) => {
    const {student: {loading, students}, requestListStudent} = props;

    useEffect(() => {
        requestListStudent();
    }, [])
    const onGetStudent = () => {
        let sList = [];
        for (let s of students) {
            sList.push((
                <div>{s.name} {s.age}</div>
            ))
        }
        return sList;

    }
    return (
        <div>
            {loading && <div>Loading</div>}
            {onGetStudent()}
        </div>
    )
}
const mapDispatchToProps = {
    requestListStudent
}
const mapStateToProps = state => {
    return {student: state.studentListReducer};
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);