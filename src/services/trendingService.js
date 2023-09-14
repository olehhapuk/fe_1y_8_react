import axios from 'axios';

export function getTrendingService(page) {
  return axios
    .get('/shows', {
      params: {
        _sort: 'rating',
        _order: '_desc',
        _page: page,
        _limit: 8,
      },
    })
    .then((res) => res.data);
}
