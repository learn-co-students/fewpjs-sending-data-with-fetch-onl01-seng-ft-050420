// Add your code here
function submitData(nameInput, emailInput) {
    let formData = {
      name: nameInput,
      email: emailInput
    };

    let configObj = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };
    
    return fetch('http://localhost:3000/users', configObj)
        .then(response => response.json())
        .then(function(object) {
            const div = document.createElement('div');
            div.textContent = object.id;
            document.body.appendChild(div);
        })
        .catch(function(error) {
            alert("Bad things! Ragnarők!");
            const div = document.createElement('div');
            div.textContent = error.message;
            document.body.appendChild(div);
    });
}

