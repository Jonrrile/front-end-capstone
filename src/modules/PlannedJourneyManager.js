const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/plannedjourneys/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/plannedjourneys`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/plannedjourneys/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
},
post(newJourney) {
    return fetch(`${remoteURL}/plannedjourneys`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newJourney)
    }).then(data => data.json())
}
}