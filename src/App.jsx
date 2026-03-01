import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Edit from './components/Edit'
import Home from './components/Home'
import Page from './components/Page'

function App() {
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
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/page' element={<Page users={users} setUsers={setUsers} />} />
        <Route path='/edit/:editId' element={<Edit users={users} setUsers={setUsers} />} />
      </Routes>
    </>
  )
}

export default App;
