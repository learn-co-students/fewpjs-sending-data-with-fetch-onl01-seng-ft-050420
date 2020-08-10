// Add your code here
// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   };

//   let configObj = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//   };

//   fetch("http://localhost:3000/dogs", configObj)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(object) {
//       console.log(object);
//     })
//     .catch(function(error) {
//         alert("Bad things! Ragnarők!");
//         console.log(error.message);
//       });;

function submitData(userName, userEmail){
    let formData = {
        name: userName,
        email: userEmail
    }

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }

    return fetch(`http://localhost:3000/users`, configObj)
    .then(function(response){
        return response.json();
    })
    .then(function(object){
        appendToDOM(object);
    })
    .catch(function(error){
        alert("Unauthorized Access");
        errorMessage(error.message)
    })
}

function appendToDOM(obj){
    const div = document.createElement("div")
    const body = document.querySelector('body')

    div.innerHTML = `<p> ${obj.name} </p> <br> <p> ${obj.email} </p> <p> ${obj.id} </p>`

    body.appendChild(div)
}

function errorMessage(msg){
    const body = document.querySelector('body')
    const hOne = document.createElement('h1')

    hOne.innerHTML = msg

    body.appendChild(hOne)
}
// document.addEventListener("click",submitData('andrew', 'andrew@email.com')
// )
