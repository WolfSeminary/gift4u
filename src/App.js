import logo from './logo.svg';
import './App.css';
import AppBar from './AppBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Deploy-work!
        </p>
      </header>
      <AppBar/>
    </div>
  );
}

export default App;
