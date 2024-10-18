import React from 'react'
import Userdetail from './Userdetail'
import { Link } from 'react-router-dom';
import { userContext } from '../context/Context';
import { useContext } from 'react'

const User = () => {
  const { users, setusers } = useContext(userContext);

  return (
    <div>

      <h1 className='text-3xl'>User List</h1>
      <div className="flex flex-col gap-3 mt-10 w-1/2">
        {users.map((user) => (
          <Link key={user.id} to={`/user/${user.id}`} className="p-3 bg-blue-100">
            {user.username}
          </Link>
        ))}
      </div>

    </div>
  )
}

export default User
