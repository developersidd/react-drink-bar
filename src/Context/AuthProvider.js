import React, { createContext, useEffect, useState } from 'react'
import useFirebase from '../Hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  // fetching data 
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s")
      .then(res => res.json())
      .then(data => setData(data?.drinks))
  }, [])

  const allContext = useFirebase();
  return (
    <AuthContext.Provider value={{ allContext, data }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;