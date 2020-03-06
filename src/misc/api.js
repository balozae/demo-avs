/* eslint-disable implicit-arrow-linebreak, comma-style */
import 'isomorphic-fetch'

class Api {
  tickets = {
    getSearchId: () =>
      fetch(`${process.env.REACT_APP_API_URL}/search`)
    ,
    getChunkBySearchId: (searchId) =>
      fetch(`${process.env.REACT_APP_API_URL}/tickets?searchId=${searchId}`)
    ,
  }
}

const api = new Api()

export default api
