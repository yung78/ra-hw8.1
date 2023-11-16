import './User.css';

export default function User({ user, setInfo }) {
  const handlerClick = (e) => {
    e.preventDefault();
    setInfo({
      id: e.target.id,
      name: e.target.name,
    });
  }

  return (
    <li 
      className='user'
      id={user.id}
      name={user.name}
      onClick={handlerClick}
    >
      {user.name}
    </li>
  );
}
