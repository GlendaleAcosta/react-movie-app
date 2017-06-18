export default function reducer(state = {
  movieGallery: null,
}, action) {
  switch (action.type) {
    case 'GET_MOVIES': {
      return { ...state, movieGallery: action.payload };
    }
    case 'TEST_2': {
      return { ...state, movieTest: action.payload };
    }
    default: return state;
  }
}
