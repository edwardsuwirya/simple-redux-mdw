import {connect} from "react-redux";
import {useState} from "react";
import {failAddStudent, finishAddStudent, startAddStudent} from "../../../state/student/studentAddAction";

const StudentPage = (props) => {
    const {studentAdd, startAddStudent, finishAddStudent, failAddStudent} = props;
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const onAddStudent = async () => {
        startAddStudent();
        try {
            await finishAddStudent({name, age});
        } catch (e) {
            console.log(e);
            failAddStudent(e);
        }
    }

    const onNameChange = (event) => setName(event.target.value);

    const onAgeChange = (event) => setAge(event.target.value);

    return (
        <div>
            <label>First Name</label>
            <input type='text' value={name} onChange={onNameChange}/>
            <label>Age</label>
            <input type='text' value={age} onChange={onAgeChange}/>
            <button onClick={onAddStudent}>Add</button>
            {studentAdd.loading && <div>Loading</div>}
            {studentAdd.student && <div>{studentAdd.student.name}</div>}
        </div>
    );
}

const mapDispatchToProps = {
    startAddStudent, finishAddStudent, failAddStudent
}
const mapStateToProps = state => {
    return {studentAdd: state.studentAddReducer};
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentPage);