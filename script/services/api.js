class API {
  static headers = {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }

  static options = {
    credentials: "include"
  }

  static baseURL = 'http://localhost:3000/api/v1'

  static post(url, body) {
    console.log(url)
    return fetch(this.baseURL + url, {
      method: 'POST',
      headers: this.headers,
      ...this.options,
      body: JSON.stringify(body)
    }).then(resp => resp.json())
  }

  static get(url) {
    return fetch(this.baseURL + url, {
      method: "GET",
      headers: this.headers,
      ...this.options
    }).then(r => r.json())
  }

  static getChildById(childId) {
    return fetch(this.baseURL + `/children/${childId}`, {
      method: "GET",
      headers: this.headers,
      ...this.options
    }).then(r => r.json())
    
  }
}