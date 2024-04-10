//匯入區塊
//import logo from './logo.svg';
import apple from './apple.jpg';
import './App.css';


//組件區塊
const fruit='芒果'
const desc='富含大量的維生素C，抗氧化及美膚'

function App(props) {
  const subject=props.subject
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to {subject}</h1>
        <img src={apple} className="fruit" alt="logo" />
        <p>{fruit}<br></br>{desc}</p>
        
        <a
          className="App-link"
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

//匯出區塊
export default App;
