import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'Welcome to Dojo Blog'
  const link = 'https://google.com'

  return (
    <div className="App">
      <Navbar />
      <header>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <div className="content">
        <h1>{ title }</h1>
        <a href={link} rel="noopener noreferrer" target='_blank'>Google</a>
        <Home />
      </div>
    </div>
  );
}

export default App;
