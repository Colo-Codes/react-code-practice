import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <h1>
                    Repository:{' '}
                    <a href='https://github.com/Colo-Codes/react-code-practice'>
                        react-code-practice
                    </a>
                </h1>
                <img src={logo} className='App-logo' alt='logo' />
                <p>
                    This is the starting point of each of the React practice
                    projects.
                </p>
                <p>
                    In order to explore each project, you need to checkout the
                    corresponding branch from this repository.
                </p>
                <em style={{ fontSize: '14px' }}>By Damian Demasi</em>
            </header>
        </div>
    );
}

export default App;
