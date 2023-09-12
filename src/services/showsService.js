import axios from 'axios';

export function searchShowsService(query, page) {
  return axios
    .get('/shows', {
      params: {
        title: query,
        _page: page,
        _limit: 8,
      },
    })
    .then((res) => res.data);
}

export function getShowDetails(showId) {
  return axios.get(`/shows/${showId}`).then((res) => res.data);
}
