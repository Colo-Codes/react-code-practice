import React from 'react';

// CONTEXT: 0. Default state
const defaultState = {
    isLoggedIn: false,
    // Include the initial value of the function (dummy value in this case)
    // so the IDE (VSCODE) can suggest it as auto-complete option:
    onLogout: () => {},
};

// CONTEXT: 1. Create a context
const AppContext = React.createContext(defaultState);

export default AppContext;
