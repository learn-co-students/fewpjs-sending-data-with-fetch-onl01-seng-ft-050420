// Add your code here
function submitData(name, email) {
   return fetch("http://localhost:3000/users",
   {method: "POST",
   headers: {
       "Content_Type": "application/jason", 
       "Accept": "application/json"}, 
    body: JSON.stringify({"userName" : name, "userEmail" : email})
    
   })
   .then(response = response.jason) 
   .then(addIdToTheDom)
   .catch(function(error) {
    console.log(error.message);
   })
}

function addIdToTheDom() {
    
}