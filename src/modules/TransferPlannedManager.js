const remoteURL = "http://localhost:5002"

export default {

post(transferedPlannedJourney) {
    return fetch(`${remoteURL}/completedjourneys`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transferedPlannedJourney)
    }).then(data => data.json())
 },
// delete(transferedPlannedJourney) {
//     return fetch(`${remoteURL}/plannedjourneys/${transferedPlannedJourney.id}`, {
//         method: "DELETE"
//     }).then(result => result.json())
// },
}