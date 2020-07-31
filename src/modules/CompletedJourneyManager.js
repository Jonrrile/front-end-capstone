const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/completedjourneys/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/completedjourneys`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/completedjourneys/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
},
post(newJourney) {
    return fetch(`${remoteURL}/completedjourneys`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newJourney)
    }).then(data => data.json())
},

update(editedCompletedJourney) {
  return fetch(`${remoteURL}/completedjourneys/${editedCompletedJourney.id}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(editedCompletedJourney)
  }).then(data => data.json());
}
}