import React from 'react';
import { createContext, useState } from 'react';


export const userContext = createContext()
const Context = (props) => {

  const [users, setusers] = useState([
    { id: 0, username: "John Doe", city: "USA" },
    { id: 1, username: "Krishna", city: "INDIA" },
    { id: 2, username: "Julie", city: "COLAMBIA" },
  ]);
  return (
    <userContext.Provider value={{ users, setusers }}>
      {props.children}
    </userContext.Provider>
  )
}

export default Context
