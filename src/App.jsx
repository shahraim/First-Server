import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [pwd, setPwd] = useState('');

  function send() {
    axios.post('http://localhost:6247/', { name, age,pwd })
      .then((res) => { console.log(res);
        setName("");
        setAge("")
      })
      .catch((err) => { console.log("Request nai gai") });
  }

  return (
    <div className="App">
      <h1>app</h1>
      <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
      <input type="age" placeholder='age' value={age} onChange={(e) => setAge(e.target.value)} />
      <input type="password" placeholder='password' value={pwd} onChange={(e) => setPwd(e.target.value)} />
      <button onClick={send}>Send</button>
      <p></p>
    </div>
  );
}

export default App;