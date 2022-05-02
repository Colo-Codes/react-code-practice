import React from 'react';

// CONTEXT: 0. Default state
const defaultState = {
    isLoggedIn: false,
};

// CONTEXT: 1. Create a context
const AppContext = React.createContext(defaultState);

export default AppContext;
