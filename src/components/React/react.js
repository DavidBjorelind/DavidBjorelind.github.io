import logo from './logo.svg';
import './react.css';

function React() {
  return (
    <div className="React">
      <header className="React-header">

        <p>
          This website was created using Node.js and React.js
        </p>

        <img src={logo} className="React-logo" alt="logo" />

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
