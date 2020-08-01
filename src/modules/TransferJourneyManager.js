const remoteURL = "http://localhost:5002"

export default {

post(transferedWishJourney) {
    return fetch(`${remoteURL}/plannedjourneys`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transferedWishJourney)
    }).then(data => data.json())
},
deleteTransferedJourney(id) {
    return fetch(`${remoteURL}/wishjourneys/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
},
}