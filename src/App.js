import logo from './logo.svg';
import './App.css';
import Stopwatch from './components/Stopwatch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img width={'200px'} src={logo} className="App-logo" alt="logo" />
        <h2>React Stopwatch</h2>
      </header>
      <section className='container'>
        <Stopwatch />
      </section>
    </div>
  );
}

export default App;
