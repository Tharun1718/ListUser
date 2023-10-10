import React, { useState } from "react";

function PostAPI({users,setUsers}) {

    const[title,setTitle] = useState('');
    const[body,setBody] = useState('');

    // post method to update the data
    const addPosts = (title,body) => {
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            body: JSON.stringify({
               title: title,
               body: body,
               id:'200' 
            }),
            headers:{
                'Content-type': 'application/json; charset=UTF-8'
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setUsers([...users,data])
        })
    }

    return(
        <div>
            <h1>Post Request - Add data</h1>
            <input value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <input value={body} onChange={(e)=>setBody(e.target.value)} />
            <button onClick={addPosts(title,body)}>Post it</button>
        </div>
    )
}

export default PostAPI;