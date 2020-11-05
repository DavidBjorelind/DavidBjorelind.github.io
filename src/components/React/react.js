import logo from './logo.svg';
import './react.css';

function React() {
  return (
    <div className="React">
      <header className="React-header">
        <img src={logo} className="React-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="React-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default React;
