import StudentForm from "./component/StudentForm";
import StudentList from "./component/StudentList";
import {useState} from "react";

const StudentPage = () => {
    const [view, setView] = useState('0');
    return (
        <div>
            {view === '0' && (
                <div>
                    <button onClick={() => setView('1')}>List</button>
                    <StudentForm/>
                </div>
            )}
            {view === '1' && (
                <div>
                    <button onClick={() => setView('0')}>Form</button>
                    <StudentList/>
                </div>
            )}

        </div>
    );
}
export default StudentPage;