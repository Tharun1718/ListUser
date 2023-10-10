import React from 'react';


function UserList({users,setUsers}) {
    return(
        <div>
            <p>User List</p>
            {
                users.map((usr)=>{
                    return(
                        <li key={usr.index}>
                            <ol>
                                <input 
                                    value={usr.name}
                                />
                            </ol>
                            <ol>Password: {usr.password}</ol>
                            <ol>
                                <button>
                                    Edit Me
                                </button>
                            </ol>
                        </li>
                    )
                })
            }
        </div>
    )
}

export default UserList;