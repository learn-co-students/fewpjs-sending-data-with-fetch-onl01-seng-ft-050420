// Add your code here
const configObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}

const submitData = (nameString, emailString) => {
    let domBody = document.querySelector('body')
    let formData = {name: nameString, email: emailString};
    configObject.body = JSON.stringify(formData)
    return fetch("http://localhost:3000/users", configObject)
        .then(response => response.json())
        .then(json => domBody.innerHTML += `${json.id}`)
        .catch(error => domBody.innerHTML += `${error.message}`)
};
// const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle"
//     })
// };

// fetch(destinationURL, configurationObject);