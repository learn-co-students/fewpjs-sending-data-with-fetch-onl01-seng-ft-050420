// Add your code here
const body = document.body

function submitData(name, email) {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({name: name, email: email})
  }
return fetch('http://localhost:3000/users', config)
  .then(res => res.json())
  .then(json => addToBody(json.id))
  .catch(err => addToBody(err.message))
}

function addToBody(text) {
  body.appendChild(document.createTextNode(text))
}
