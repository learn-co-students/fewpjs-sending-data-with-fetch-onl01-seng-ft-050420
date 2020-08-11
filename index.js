// Add your code here
function submitData (name, email) {
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
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        let body = document.querySelector('body');
        let div = document.createElement('div');
        body.appendChild(div);
        div.innerHTML = object.id;
    })
    .catch(function(error) {
        alert("Unauthorized Access");
        let body = document.querySelector('body');
        let div = document.createElement('div');
        body.appendChild(div);
        div.innerHTML = error.message;
    }); 

}
   
