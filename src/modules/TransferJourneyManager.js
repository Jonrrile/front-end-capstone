const remoteURL = "http://localhost:5002"

export default {

post(transferedJourney) {
    return fetch(`${remoteURL}/plannedjourneys`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transferedJourney)
    }).then(data => data.json())
},
// delete(transferedJourney) {
//     return fetch(`${remoteURL}/wishjourneys/${transferedJourney.id}`, {
//         method: "DELETE"
//     }).then(result => result.json())
// },
}