export default function reducer(state = {
  movieGallery: null,
  currentMovie: null,
}, action) {
  switch (action.type) {
    case 'GET_MOVIES': {
      return { ...state, movieGallery: action.payload };
    }
    case 'GET_CURRENT_MOVIE': {
      return { ...state, currentMovie: action.payload };
    }
    default: return state;
  }
}
