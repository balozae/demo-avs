class Api {
  constructor() {
    this.client = fetch.bind(window)
  }

  tickets = {
    getSearchId: () =>
      this.client(`${process.env.REACT_APP_API_URL}/search`)
    ,
    getChunk: (searchId) =>
      this.client(`${process.env.REACT_APP_API_URL}/tickets?searchId=${searchId}`)
    ,
    getList: (searchId) =>
      this.client(`${process.env.REACT_APP_API_URL}/tickets?searchId=${searchId}`)
    ,
  }
}

const api = new Api()

export default api
