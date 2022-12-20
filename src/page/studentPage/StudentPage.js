import {connect} from "react-redux";
import {addStudent} from "../../state/student/studentAction";
import {useState} from "react";
import StudentList from "./StudentList";

const StudentPage = (props) => {
    const {addStudent} = props;
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const onAddStudent = () => {
        addStudent({name, age});
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
            <StudentList/>
        </div>
    );
}

const mapDispatchToProps = {
    addStudent
}

export default connect(null, mapDispatchToProps)(StudentPage);