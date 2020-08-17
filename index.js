function submitData(name,email){
    
      let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify( {
            name,
            email
        })
      };
       
      return fetch("http://localhost:3000/users", configObj) //no implicit returning in javascript
      //go to the right place but request will not get returned, response will be undefined because it is not returned
         .then(function(response) {
           return response.json();
        })
        .then(function(object) {
          console.log(object);
          let paragraph = document.createElement('p')
          paragraph.innerHTML = object["id"]
          let body = document.querySelector('body')
          body.appendChild(paragraph)
        }) 
        .catch(function(error) { //trying to fetch something that is not given permission to for example
          alert("Unauthorized Access");
          console.log(error.message);
          let paragraph = document.createElement('p')
          paragraph.innerHTML = error.message
          document.body.appendChild(paragraph)
        })}
//return fetch("http://localhost:3000/users", configObj)
document.addEventListener("DOMContentLoaded", submitData())