import axios from 'axios';
import reactLogo from './assets/react.svg';
import viteLogo from '../public/vite.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [age, setAge] = useState('')
  const [name, setNames] = useState('')
  const [town, setTown] = useState('')
  const [address, setAddress] = useState('')

const submitHandler = e => {
  e.preventDefault()
  axios.post('http://localhost:8080', {username: username, password: password,phone: phone,age: age,name: name,town: town,address: address })
  .then((data) => {
    console.log(data);
    setUsername('')
    setPassword('')
    setPhone('')
    setAge('')
    setNames('')
    setTown('')
    setAddress('')
  })
}

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="card">
        <form onSubmit={submitHandler}>
          <h3>Sign Up</h3>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div>
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>

          <div>
            <label htmlFor="age">Age</label>
            <input type="text" id="age" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>

          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setNames(e.target.value)} />
          </div>

          <div>
            <label htmlFor="town">Town</label>
            <input type="text" id="town" value={town} onChange={(e) => setTown(e.target.value)} />
          </div>

          <div>
            <label htmlFor="address">Address</label>
            <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>

          <div>
            <button type="cancel">Cancel</button>
            <button type="submit">Submit</button>
          </div>
        </form>
</div>


    </>
  );
}

export default App;
