const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/blogs/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/blogs`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/blogs/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
},
post(blog) {
    return fetch(`${remoteURL}/blogs`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(blog)
    }).then(data => data.json())
},
update(editedBlog) {
  return fetch(`${remoteURL}/blogs/${editedBlog.id}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(editedBlog)
  }).then(data => data.json());
}

}