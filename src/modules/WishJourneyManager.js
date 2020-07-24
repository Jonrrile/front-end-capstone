const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/wishjourneys/${id}`).then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/wishjourneys`).then(result => result.json())
    },
    delete(id) {
        return fetch(`${remoteURL}/wishjourneys/${id}`, {
            method: "DELETE"
        }).then(result => result.json())
    },
    post(newJourney) {
        return fetch(`${remoteURL}/wishjourneys`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newJourney)
        }).then(data => data.json())
    }
}