import React from 'react';

const Header = (props) => {
  // const [username, setUsername] = useState('');

  // useEffect(() => {
  //   if (!data) {
  //     setUsername('Admin');
  //   } else {
  //     setUsername(data.firstName);
  //   }
  // }, [data]); // runs whenever 'data' changes

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>username🙌</span>
      </h1>
      <button onClick={logOutUser} className='bg-red-600 text-lg font-medium px-5 py-2 rounded-small'>
        Log out
      </button>
    </div>
  );
};

export default Header;
