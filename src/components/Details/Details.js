import { useEffect, useState } from 'react'
import './Details.css'

export default function Details({ info }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState()
  
  useEffect(() =>{
    const url = process.env.REACT_APP_URL_GET_USERS;

    setData();

    if (info) {
      setLoading(true);

      fetch(url+`${info.id}.json`, )
        .then((response) => response.ok ? response : new Error(response.statusText))
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((err) => console.log('Exit with error: ' + err))
        .then(() => setLoading(false));
    }
  }, [info?.id]);
  
  if (data) {
    
    return (
      <div className='details_block'>
        <div className='data'>
          <img src={data.avatar} className='avatar' alt='Avatar'/>
        </div>
        <div className='data'>{data.name}</div>
        <div className='data'>City: {data.details.city}</div>
        <div className='data'>Company: {data.details.company}</div>
        <div className='data'>Position: {data.details.position}</div>
      </div>
    );
  }
  return (
    <>
      {loading ? <>
        <div className='loading'>Loading</div>
        <span className='loader'></span>
      </> : <></>}
    </>
    ); //  не знаю как эту ↑ конструкцию корректно написать в плане отступов и переносов
}
