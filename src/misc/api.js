/* eslint-disable implicit-arrow-linebreak, comma-style */
import fetch from 'unfetch'

class Api {
  constructor() {
    this.client = fetch
  }

  tickets = {
    getSearchId: () =>
      this.client(`${process.env.REACT_APP_API_URL}/search`)
    ,
    getChunkBySearchId: (searchId) =>
      this.client(`${process.env.REACT_APP_API_URL}/tickets?searchId=${searchId}`)
    ,
  }
}

const api = new Api()

export default api
