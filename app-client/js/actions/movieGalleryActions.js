import axios from 'axios';

export function getMovies(filter) {
  return axios({
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${filter}`,
    params: {
      api_key: process.env.TMDB_KEY,
    },
  })
  .then((response) => {
    return {
      type: 'GET_MOVIES',
      payload: response.data,
    };
  })
  .catch((error) => {
    console.log(error);
    return {
      type: 'ERROR',
      payload: error,
    };
  });
}

export function getCurrentMovie(movieID) {
  return axios({
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${movieID}`,
    params: {
      api_key: process.env.TMDB_KEY,
    },
  })
  .then((response) => {
    return {
      type: 'GET_CURRENT_MOVIE',
      payload: response.data,
    };
  })
  .catch((error) => {
    console.log(error);
    return {
      type: 'ERROR',
      payload: error,
    };
  });
}

export function closeMenu() {
  return {
    type: 'CLOSE_MENU',
    payload: false,
  };
}
