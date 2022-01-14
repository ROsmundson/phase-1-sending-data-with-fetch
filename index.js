// Add your code here
function submitData(usersName, usersEmail){
  const formData = {
    name: usersName,
    email: usersEmail
  }
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData),
  };

  return fetch("http://localhost:3000/users", configurationObject)
  .then(response => response.json())
  .then(data => document.body.innerHTML = data.id)
  .catch(error => document.body.innerHTML = error.message)
}

// it( "handles a failed POST request using catch, appends the error message to the DOM", async function () {
//   let message = 'Unauthorized Access'
//   nock( 'http://localhost:3000' )
//     .post( '/users' )
//     .replyWithError( {
//       message: message,
//       code: '401',
//     } )

//   let name = "Jim"
//   let email = "jim@jim.com"

//   await submitData( name, email )
//   expect( document.body.innerHTML )
//     .to.include( message )
// } )
// } )