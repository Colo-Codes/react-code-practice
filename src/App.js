import './App.css';
import { useState, useReducer } from 'react';

const initialState = { counter: 0 };

const reducer = (reducerState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { counter: reducerState.counter + 1 };
        case 'DECREMENT':
            return { counter: reducerState.counter - 1 };
        default:
            throw new Error();
    }
};

function App() {
    // Using useState:
    // const [state, setState] = useState({ counter: 0 });

    // Using useReducer:
    const [reducerState, dispatch] = useReducer(reducer, initialState);

    const handleClick = e => {
        if (e.target.value === '-') {
            dispatch({ type: 'DECREMENT' });
        }
        if (e.target.value === '+') {
            dispatch({ type: 'INCREMENT' });
        }
    };

    return (
        <div className='mainContainer'>
            <div>Count is: {reducerState.counter}</div>
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
