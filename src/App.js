import { useState } from 'react';
import './App.css';
import Login from './Login';
import UserList from './UserList';
import { Routes, Route } from 'react-router-dom';

function App() {

  const [users,setUsers] = useState([]);

  return (
    <div>
      <p>App is running</p>
      <Routes>
        <Route path='/' element={<Login users={users} setUsers={setUsers} />}/>
        <Route path='/userList' element={<UserList users={users} setUsers={setUsers} />} />
      </Routes>
    </div>
  );
}

export default App;


