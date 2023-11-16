import './App.css';
import Add from './components/Add';
import List from './components/List';
import Search from './components/Search.';


function App() {
  return (
    <div className="App">
      
      <Search/>
      <div>
        <h1>Add Form</h1>
      </div>
      <Add/>
      <List/>
    </div>
  );
}

export default App;