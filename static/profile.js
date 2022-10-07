function submitProfile(evt) {
  evt.preventDefault();

  const data = {
    name: document.querySelector('#name-field').value,
    // fill in the rest
    age: document.getElementById('age-field').value,                  //getting info from server, using the same variable got from json on the python side(server)
    occupation: document.getElementById('occupation-field').value     //getting info from server, using the same variable got from json on the python side(server)
  };

  // make request to server to get the data

  fetch('/api/profile', {
    method: 'POST',
    body: JSON.stringify(data),                                         // making the data json string
    headers: {
      'Content-Type': 'application/json',                              // specifying that it will be json file
    },
  })
  // add the data the server returns to the document
  .then((response) => response.json())
  .then((responseJson) => {
   
    let name = responseJson['fullname'];                            //creating a nice html from json
    let age = responseJson['customer_age'];                        //creating a nice html from json
    let occupation = responseJson['customer_ocupation'];          //creating a nice html from json

    document.getElementById('profiles').innerHTML += `<p> ${name}, ${age}, ${occupation}`; // adding data to div as content using innerHTML
  })
  // (you can add it to the end of the div with ID "profiles")
}

document.querySelector('#profile-form').addEventListener('submit', submitProfile);
