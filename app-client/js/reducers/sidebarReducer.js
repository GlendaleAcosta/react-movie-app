export default function reducer(state = {
  genres: null,
}, action) {
  switch (action.type) {
    case 'GET_GENRES': {
      return { ...state, ...action.payload };
    }
    default: return state;
  }
}
