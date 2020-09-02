function submitData(name, email) {
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({name: name, email: email})
  };

return fetch("http://localhost:3000/users", configObj)
  .then(res => res.json())
  .then(object => {
      const h1 = document.createElement('h1')
      h1.textContent = object.id
      document.body.appendChild(h1)
  })
  .catch(error => {
      const h2 = document.createElement('h2')
      h2.textContent = error.message
      document.body.appendChild(h2)
  });
}
