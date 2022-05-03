import React, { useContext } from 'react';
import AppContext from '../../store/app-context';
import classes from './Navigation.module.css';

const Navigation = props => {
    // CONTEXT: 3.2: using the useContext hook to consume (subscribes to) the context
    // const ctx = useContext(AuthContext);

    // CONTEXT: 3.1: using Context.Consumer to consume (subscribes to) the context
    return (
        <AppContext.Consumer>
            {contextValue => {
                return (
                    <nav className={classes.nav}>
                        <ul>
                            {contextValue.isLoggedIn && (
                                <li>
                                    <a href='/'>Users</a>
                                </li>
                            )}
                            {contextValue.isLoggedIn && (
                                <li>
                                    <a href='/'>Admin</a>
                                </li>
                            )}
                            {contextValue.isLoggedIn && (
                                <li>
                                    <button onClick={props.onLogout}>
                                        Logout
                                    </button>
                                </li>
                            )}
                        </ul>
                    </nav>
                );
            }}
        </AppContext.Consumer>
    );
};

export default Navigation;
