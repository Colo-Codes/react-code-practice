import './App.css';
import { useState } from 'react';

function App() {
    const [state, setState] = useState({ counter: 0 });

    const handleClick = e => {
        if (e.target.value === '-') {
            setState(prevState => ({ counter: prevState.counter - 1 }));
        }
        if (e.target.value === '+') {
            setState(prevState => ({ counter: prevState.counter + 1 }));
        }
    };

    return (
        <div className='mainContainer'>
            <div>Count is: {state.counter}</div>
            <div className='buttonContainer'>
                <button onClick={handleClick} value='-'>
                    -
                </button>
                <button onClick={handleClick} value='+'>
                    +
                </button>
            </div>
        </div>
    );
}

export default App;
