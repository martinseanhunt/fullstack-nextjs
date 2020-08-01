const initialState = {
  isFetching: false
}

const userReducer =(state,{type, payload}) => {
  switch(type) {
    case 'SET_USER':
      return {
        ...state,
        ...payload,
        isFetching: false
      }
    case 'SET_FETCHING':
      return {
        ...state,
        isFetching: true
      }
    default:
      return state
  }
}

export default userReducer
export { initialState }