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

export function getFilteredMovies(filter) {
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

export function getMoviesByGenre(genreId) {
  return axios({
    method: 'GET',
    url: `https://api.themoviedb.org/3/genre/${genreId}/movies`,
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

export function getCredits(movieID) {
  return axios({
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${movieID}/credits`,
    params: {
      api_key: process.env.TMDB_KEY,
    },
  })
  .then((response) => {
    // console.log(response);
    return {
      type: 'GET_CREDITS',
      payload: response.data,
    };
  })
  .catch((error) => {
    // console.log('jfjfjfjjfjjfjfjf')
    console.log(error);
    return {
      type: 'ERROR',
      payload: error,
    };
  });
}

export function getSearchResults(movie) {
  return axios({
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/movie?',
    params: {
      api_key: process.env.TMDB_KEY,
      language: 'en-US',
      query: movie,
      page: 1,
      include_adult: false,
    },
  })
  .then((response) => {
    // console.log(response.data);
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

export function getMoviesByFilter(filter) {
  const hs = {
    'Now Playing': 'now_playing',
    Popular: 'popular',
    'Top Rated': 'top_rated',
    Upcoming: 'upcoming',
  };

  return axios({
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${hs[filter]}?`,
    params: {
      api_key: process.env.TMDB_KEY,
      language: 'en-US',
      page: 1,
      include_adult: false,
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
