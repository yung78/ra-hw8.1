import { useEffect, useState } from 'react'
import User from '../User/User';
import './List.css'

export default function List({ setInfo }) {
  const [users, setUsers] = useState();

  useEffect(() => {
    const url = process.env.REACT_APP_URL_GET_USERS;

    fetch(url+'users.json')
      .then((response) => response.ok ? response : new Error(response.statusText))
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log('Exit with error: ' + err));
  }, []);

  return (
    <div className='users_block'>
      <ul className='users'>
        {users?.map((user, index) => (
          <User 
            key={index}
            user={user}
            setInfo={setInfo}
          />
        ))}
      </ul>
    </div>
  );
}
