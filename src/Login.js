import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({users,setUsers}) {

    const[name,setName] = useState('');
    const[password,setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = () =>{
        const newUser={name:name,password:password}
        setUsers([...users,newUser])
        navigate('/userList')
    }

    return(
        <div>
            <input 
                placeholder='enter your name'
                onChange={(e)=>setName(e.target.value)}
                value={name}
            />
            <input 
                placeholder='enter your password' 
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
            />
            <button onClick={handleLogin}>Submit</button>
        </div>
    )
}

export default Login;