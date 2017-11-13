export default function reducer(state = {
  userInfo: null,
}, action) {
  switch (action.type) {
    case 'GET_PROFILE': {
      return { ...state, userInfo: action.payload };
    }
    default: return state;
  }
}
