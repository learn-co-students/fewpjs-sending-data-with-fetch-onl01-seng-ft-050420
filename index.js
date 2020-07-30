// Add your code here
function submitData(userName, userEmail) {
  let formData = {
    name: userName,
    email: userEmail
  };

  let configObj = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  };

  return fetch('http://localhost:3000/users', configObj)
           .then(resp => resp.json())
           .then(obj => {
             const h1 = document.createElement('h1');
             h1.textContent = obj.id;
             document.body.appendChild(h1);
           })
           .catch(error => {
             const h2 = document.createElement('h2');
             h2.textContent = error.message;
             document.body.appendChild(h2);
           })
};





// let formData = {
//   dogName: 'Byron',
//   dogBreed: 'Poodle'
// };

// let configObj = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json'
//   },
//   body: JSON.stringify(formData)
// };

// fetch('http://localhost:3000/dogs', configObj)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(object) {
//     console.log(object);
//   })
//   .catch(function(error) {
//     alert('Bad things!');
//     console.log(error.message);
//   })
