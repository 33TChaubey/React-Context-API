import React from 'react'
import { userContext } from '../context/Context';
import { useParams } from 'react-router-dom';
import { useContext, useState } from 'react';

const Userdetail = () => {
  const { id } = useParams();
  const { users, setusers } = useContext(userContext);
  return (
    <>
      <div> {users[id].username}</div>
      <button onClick={() => {
        window.history.back();
      }} className="bg-blue-500 px-3 py-2 rounded">Go back</button>
    </>
  )
}

export default Userdetail;
