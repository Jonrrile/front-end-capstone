const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/pictures/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/pictures`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/pictures/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
},
post(picture) {
    return fetch(`${remoteURL}/pictures`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(picture)
    }).then(data => data.json())
},

}