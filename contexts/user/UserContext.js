import React, { useContext, createContext, useReducer, useMemo } from 'react'

import userReducer, { initialState } from './userReducer'

// TODO: I'm not using this context any more becuase we get the user information as part
// of the auth process with getServerSideProps. Keeping this here since I'll probably use
// a context for something else down the road and it saves me time leter :) 

const UserContext = createContext()
const useUserContext = () => useContext(UserContext)

const UserContextProvider = props => {
  const [state, dispatch] = useReducer(userReducer, initialState)

  const value = useMemo(() => ({
    state,
    dispatch
  }), [
    state, 
    dispatch
  ])

  return (
    <UserContext.Provider value={props.value || value}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
export { useUserContext }