import axios from 'axios';

export function getGenres() {
  console.log('we are here');
  return axios({
    method: 'GET',
    url: 'https://api.themoviedb.org/3/genre/movie/list',
    params: {
      api_key: process.env.TMDB_KEY,
    },
  })
  .then((response) => {
    return {
      type: 'GET_GENRES',
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