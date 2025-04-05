import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import List from './Component/List';
import { useState } from 'react';
function App() {
  const [state,setState] = useState({
    name : "dvid ngurn",
    address :"duong so 3",
    age:20,
});
  function handleOver(event){
    console.log(event.pageX)
  }
  const handleOnchangeIput = (event)=>{
    setState({
      ...state, name : event.target.value
    })
  }
  const handleAddNewUser=()=>{}
  const handleSubmit =(event)=>{
    event.preventDefault();
    
    
  }
   const [user, setUser] = useState([
      {
        id: 1,
        name: "dvidnguyen",
        age: 30,
      },
      {
        id: 2,
        name: "thuhuong",
        age: 27,
      },
      {
        id: 3,
        name: "minhkhoi",
        age: 32,
      },
    ]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} style={{height :"100px" , width :"100px"}} className="App-logo" alt="logo" />

        <p>{state.name}</p>
        <button onMouseOver={handleOver} >Click me </button>
        <form onSubmit={handleSubmit}>
          <input value={state.name} type="text" onChange={handleOnchangeIput} />
          <button>Submit</button>
        </form>
        <List user={user} 

        />
      </header>
    </div>
  );
}

export default App;
