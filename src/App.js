import './App.css';
import StudentPage from "./page/studentPage/StudentPage";

const App = () => {
    const myCard = {
        height: '320px',
        width: '320px',
        borderRadius: '10px',
        backgroundColor: 'white',
        border: '1px solid gray',
        margin: '24px',
        boxShadow: '10px 10px lightgray',
        textAlign: 'center'

    };
    const button1Style = {
        height: '32px',
        width: '32px',
        margin: '5px',
        backgroundColor: 'yellow',
        borderRight: '3px solid gray',
        borderBottom: '3px solid gray',
        borderTop: '3px solid whitesmoke',
        borderLeft: '3px solid whitesmoke',

    };
    const button2Style = {
        height: '32px',
        width: '32px',
        margin: '5px',
        backgroundColor: 'blue',
        borderRight: '3px solid gray',
        borderBottom: '3px solid gray',
        borderTop: '3px solid whitesmoke',
        borderLeft: '3px solid whitesmoke',
    };

    return (
        <div style={myCard}>
            <div>
                <button type={"submit"} style={button1Style}>+</button>
                <button style={button2Style}>-</button>
                <div>
                    <StudentPage/>
                </div>
            </div>
        </div>
    )
}

export default App;