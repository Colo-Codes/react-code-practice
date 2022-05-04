import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AppContext from './store/app-context';

function App() {
    const [localIsLoggedIn, setLocalIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInInformation =
            localStorage.getItem('isLoggedIn');

        if (storedUserLoggedInInformation === '1') {
            setLocalIsLoggedIn(true);
        }
    }, []);

    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/demo anyway
        localStorage.setItem('isLoggedIn', '1');
        setLocalIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setLocalIsLoggedIn(false);
    };

    // CONTEXT: 2. Providing the Context to our components
    return (
        <AppContext.Provider
            value={{
                // The isLoggedIn Context state will get updated when localIsLoggedIn updates,
                // and its value will be passed to the consumers of this Context.
                isLoggedIn: localIsLoggedIn,
                onLogout: logoutHandler, // CONTEXT 4.: Dynamic Context
            }}>
            {/* <MainHeader onLogout={logoutHandler} /> */}
            <MainHeader />
            <main>
                {/* We don't use Context to pass the onLogout function here
                because we are using that function directly in the
                component (it's not a passing through, or forwarding, props): */}
                {!localIsLoggedIn && <Login onLogin={loginHandler} />}
                {localIsLoggedIn && <Home onLogout={logoutHandler} />}
            </main>
        </AppContext.Provider>
    );
}

export default App;
