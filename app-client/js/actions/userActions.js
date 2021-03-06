import axios from 'axios';

export function signUp(userInfo) {
  console.log(userInfo);
  return axios({
    method: 'POST',
    url: '/sign-up',
    data: userInfo,
  })
  .then((response) => {
    console.log(response);
    return {
      type: 'GET_PROFILE',
      payload: response.data.user,
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

export function login(filter) {
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