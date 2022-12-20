import {connect} from "react-redux";
import studentApi from "../../../api/studentApi";
import {useEffect} from "react";
import {failListStudent, finishListStudent, startListStudent} from "../../../state/student/studentListAction";

const StudentList = (props) => {
    const {studentList, startListStudent, finishListStudent, failListStudent} = props;
    const {studentGet} = studentApi();

    useEffect(() => {
        const fetchData = async () => {
            startListStudent();
            try {
                const data = await studentGet();
                finishListStudent(data);
            } catch (e) {
                failListStudent(e);
            }

        }
        fetchData();
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
    startListStudent, finishListStudent, failListStudent
}
const mapStateToProps = state => {
    return {studentList: state.studentListReducer};
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);