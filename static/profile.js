function submitProfile(evt) {
  evt.preventDefault();

  const data = {
    name: document.querySelector('#name-field').value,
    // fill in the rest
    age: document.getElementById('age-field').value,
    occupation: document.getElementById('occupation-field').value
  };

  // make request to server to get the data

  fetch('/api/profile', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  // add the data the server returns to the document
  .then((response) => response.json())
  .then((responseJson) => {
    //create nice html from json
    let name = responseJson['fullname'];
    let age = responseJson['customer_age'];
    let occupation = responseJson['customer_ocupation'];

    document.getElementById('profiles').innerHTML += `<p> ${name}, ${age}, ${occupation}`;
  })
  // (you can add it to the end of the div with ID "profiles")
}

document.querySelector('#profile-form').addEventListener('submit', submitProfile);
