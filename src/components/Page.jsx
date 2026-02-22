import { useEffect } from "react";
import {useState } from "react";
function Page() {

const url = "https://jsonplaceholder.typicode.com/posts";
  const [users, setUsers] = useState([]);

  useEffect(() => {
fetch(url)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }, [])
 

  return (
    <>
    <div className="card-container">
          {users.length > 0 && users.map(user => (
            <a href={`https://jsonplaceholder.typicode.com/posts/${user.id}`} style={{color:"red"}}>
            <div key={user.id} style={{listStyle:"none"}} className="card">
              <h3 style={{color:"blue"}}>{user.id}. {" "}
                 {user.title}
              </h3> 
              </div>
              </a>
          ))}
    </div>
    </>
  
  )

    
}

export default Page;