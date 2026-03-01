import { useNavigate } from "react-router-dom";

function Page({ users, setUsers }) {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const confirmDelete = confirm("Are you sure want to delete? ")
    if (confirmDelete) setUsers(prev => prev.filter(user => user.id !== id));
  };

  return (
    <>
      <div className="card-container">
        <button onClick={() => navigate("/create")}>Create a new Post</button>
        <br /> <br />
        <table border="1">
          <thead>
            <tr>
              {users.length > 0 && Object.keys(users[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
              <th>Action Buttons</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 && users.map((user) => (
              <tr key={user.id}>
                <td>{user.userId}</td>
                <td>{user.id}</td>
                <td>{user.title}</td>
                <td>{user.body}</td>
                <td>
                  <button onClick={() => navigate(`/edit/${user.id}`)}>Edit</button>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>

  )


}

export default Page;