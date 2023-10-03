import axios from 'axios';

export function searchShowsService(query, page) {
  return axios
    .get('/shows', {
      params: {
        title_like: query,
        _page: page,
        _limit: 2,
      },
    })
    .then((res) => {
      const showsCount = +res.headers['x-total-count'];
      return {
        totalCount: showsCount,
        totalPages: Math.ceil(showsCount / 2),
        results: res.data,
      };
    });
}

export function getShowDetails(showId) {
  return axios.get(`/shows/${showId}`).then((res) => res.data);
}

export function getShowCast(showId) {
  return axios.get(`/shows/${showId}/cast`).then((res) => res.data);
}

export function getShowEpisodes(showId) {
  return axios.get(`/shows/${showId}/episodes`).then((res) => res.data);
}

export function getShowReviews(showId) {
  return axios.get(`/shows/${showId}/reviews`).then((res) => res.data);
}
