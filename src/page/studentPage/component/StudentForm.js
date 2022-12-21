import {connect} from "react-redux";
import {useState} from "react";
import {requestAddStudent} from "../../../state/student/studentAddAction";

const StudentPage = (props) => {
    const {studentAdd, requestAddStudent} = props;
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const onAddStudent = () => requestAddStudent({name, age});

    const onNameChange = (event) => setName(event.target.value);

    const onAgeChange = (event) => setAge(event.target.value);

    return (
        <div>
            <label htmlFor='fname' style={{display: 'block'}}>First Name</label>
            <input id='fname' type='text' value={name} onChange={onNameChange}/>
            <br/>
            <label htmlFor='age' style={{display: 'block'}}>Age</label>
            <input id='age' type='text' value={age} onChange={onAgeChange}/>
            <br/>
            <button onClick={onAddStudent}>Add</button>
            {studentAdd.loading && <div>Loading</div>}
            {studentAdd.student && <div>{studentAdd.student.name}</div>}
        </div>
    );
}

const mapDispatchToProps = {requestAddStudent}
const mapStateToProps = state => {
    return {studentAdd: state.studentAddReducer};
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentPage);