function submitData(name,email){
    let formData = {
        name: name,
        email: email
    };
          
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };
          
    return fetch("http://localhost:3000/users", configObj)
    .then(resp => resp.json())
    .then(object => {
        const h1 = document.createElement('h1'); // create a new h1 element
        h1.textContent = object.id; // add the object id has a text to the h1 
        document.body.appendChild(h1); // add the h1 text to the document body using appendChild
    })
    .catch(error => {
        const h2 = document.createElement('h2');
        h2.textContent = error.message;
        document.body.appendChild(h2);
    })
};


