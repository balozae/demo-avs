/* eslint-disable implicit-arrow-linebreak, comma-style */
class Api {
  constructor() {
    this.client = fetch.bind(window)
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
