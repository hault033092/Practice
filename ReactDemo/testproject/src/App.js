import React, {useState} from 'react'
import Tweet from './Tweet'
import './App.css'

function App(){
  const [users, setUsers] = useState([
    {name: 'Nguyen', message: 'I love bulking'},
    {name: 'John', message: 'asdagfaf'},
    {name: 'djahsdjf', message: 'ijfijsiv'}
  ])

  return(
    <div className='app'>
     {users.map(user => (
      <Tweet />
     ))}
    </div>
  )
}

export default App