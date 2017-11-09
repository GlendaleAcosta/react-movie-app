export default function reducer(state = {
  movieGallery: null,
  currentMovie: null,
  searchResults: null,
  credits: null,
}, action) {
  switch (action.type) {
    case 'GET_MOVIES': {
      return { ...state, movieGallery: action.payload };
    }
    case 'GET_CURRENT_MOVIE': {
      return { ...state, currentMovie: action.payload };
    }
    case 'GET_SEARCH_RESULTS': {
      return { ...state, searchResults: action.payload };
    }
    case 'GET_CREDITS': {
      return { ...state, credits: action.payload };
    }
    default: return state;
  }
}
