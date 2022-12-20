import {connect} from "react-redux";

const StudentList = (props) => {
    const {student} = props;
    const onGetStudent = () => {
        let studentList = [];
        for (let s of student.data) {
            studentList.push((
                <div>{s.name} {s.age}</div>
            ))
        }
        return studentList;

    }
    return (
        <div>
            {onGetStudent()}
        </div>
    )
}

const mapStateToProps = state => {
    return {student: state.studentReducer};
};

export default connect(mapStateToProps)(StudentList);