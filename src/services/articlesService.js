import axios from 'axios';

axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

export function searchArticles(query, page) {
  return axios
    .get('/search', {
      params: {
        query,
        page,
      },
    })
    .then((res) => res.data);
}

// export async function searchArticles(query, page) {
//   try {
//     const res = await axios.get('/search', {
//       params: {
//         query,
//         page,
//       },
//     });

//     return res.data;
//   } catch (error) {
//     console.log(error);
//   }
// }
