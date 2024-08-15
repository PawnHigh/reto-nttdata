import './App.css'
import { useEffect, useState } from 'react';
import axios from 'axios'

import TableCoin from './components/table_coin'

function App() {
  const [users, setUsers] = useState([])

  const getData = async () => {
    const res = await axios.get("https://randomuser.me/api/?results=5")
    setUsers(res.data.results)
    console.log(res.data.results)
  }

  useEffect(() => {
    return () => getData()
  }, [setUsers])

  return (
    <div className="container">
      <div className='row'>
        <TableCoin users={users}/>
      </div>
    </div>
  );
}

export default App;
