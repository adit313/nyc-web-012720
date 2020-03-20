class Adapter {
  constructor(baseUrl){
    this.baseUrl = baseUrl
  }

  getResources() {
    return fetch(this.baseUrl)
    .then(response => response.json())
  }
  
  createResource(resource){
    return fetch(this.baseUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(resource)
    })
    .then(response => response.json())
  }

  updateResource(resource, body){
    fetch(`${this.baseUrl}/${resource.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(body)
    })
    .then(response => response.json())
  }

  destroyResource(resource){
    fetch(`${this.baseUrl}/${resource.id}`, { method: "DELETE" })
  }
}