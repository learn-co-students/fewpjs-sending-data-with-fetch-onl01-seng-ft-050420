const form = document.querySelector('form')

// form.addEventListener('submit', submitForm)

// function submitForm(e){
//     e.preventDefault()
//     let name = form.querySelector('input[name="name"]').value;
//     let email = form.querySelector('input[name="email"]').value;
//     submitData(name, email);
// }

function submitData(username, email) {
    const body = document.querySelector('body');
    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: username,
            email: email
        })
    };
    return fetch("http://localhost:3000/users", config)
        .then(resp => resp.json())
        .then(json => body.innerHTML += `${json.id}`)
        .catch(error => body.innerHTML += `${error.message}` )
}
