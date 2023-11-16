import './UsersInfo.css'
import { useState } from 'react';
import Details from '../Details/Details';
import List from '../List/List';

export default function UsersInfo() {
  const [info, setInfo] = useState();

  return (
    <div className='users_info'>
      <List 
        setInfo={setInfo}
      />
      <Details 
        info={info}
      />
    </div>
  );
}
