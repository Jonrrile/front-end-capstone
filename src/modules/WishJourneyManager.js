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
    }
}