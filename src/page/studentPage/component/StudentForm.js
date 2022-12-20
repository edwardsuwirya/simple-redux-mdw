import {connect} from "react-redux";
import {useState} from "react";
import {postStudent} from "../../../state/student/studentAddAction";

const StudentPage = (props) => {
    const {studentAdd, postStudent} = props;
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const onAddStudent = () => postStudent({name, age});

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

const mapDispatchToProps = dispatch => {
    return {
        postStudent: postStudent(dispatch)
    }
}
const mapStateToProps = state => {
    return {studentAdd: state.studentAddReducer};
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentPage);