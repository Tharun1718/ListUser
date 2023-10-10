import React, {useEffect, useState} from 'react';

function FetchAPI(){

    const[posts,setPosts] = useState([])

    // using fetch method to get data from details
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch((err)=> console.log(err.message))
    },[])

    return(
        <div>
            <p>Posts</p>
            {
                posts.map((post)=>{
                    return(
                        <li key={post.id}>
                            <h3>{post.title}</h3>
                            <ol>{post.body}</ol>
                        </li>
                    )
                })
            }
        </div>
    )
}

export default FetchAPI;