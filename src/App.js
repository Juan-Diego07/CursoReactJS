import logo from './logo.svg';
import './App.css';
import TaskListComponent from './Components/Container/task_list';
import ContactList from './Components/Container/contact_list';
//import Greeting from './Components/pure/greeting';
//import Greetingf from './Components/pure/greetingF';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<Greeting name="Juan Diego"/>*/}
        {/*<Greetingf name="Juan Diego"/>*/}
        <TaskListComponent></TaskListComponent>
        <ContactList></ContactList>
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

export default App;
