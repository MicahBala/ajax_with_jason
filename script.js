// AJAX Request
let request;

// With AJAX you create a request that goes to the server but it is handled differently by older microsoft browsers the next lines of code checks to see if the browser uses an HMLHttpRequest also known as an XHR request and places that request into the request variable

if (window.XMLHttpRequest) {
  request = new XMLHttpRequest();
} else {
  request = new ActiveXObject('Microsoft.HMLHTTP');
}

// Open the request asking for a specific file
request.open('GET', 'data.json');

// Event handler to monitor the status of the request we are going to make. check to see if the request is successful by checking some variables the server will return
request.onreadystatechange = function() {
  if (request.status === 200 && request.readyState === 4) {
    // Bring the requested data into our object, parsing the response text
    let info = JSON.parse(request.responseText);

    let myName = `${info.full_name}`;
    let output = '';

    // Loop through the links object
    for (let i = 0; i < info.links.length; i++) {
      // for each of the links object pick the key
      for (key in info.links[i]) {
        // Verify that no other properties have been added to this object, if it has the property we are looking for
        if (info.links[i].hasOwnProperty(key)) {
          output += `<li><a href="${info.links[i][key]}">${key}</a></li>`;
        } //hasOwnProperty check
      } //for each object
    } //for each array element

    // Get the DOM element
    let update = document.getElementById('links');
    let name = document.querySelector('.name');

    name.innerText = myName;

    // set the inner html to the output variable
    update.innerHTML = output;
  } //ready
}; //event

// We are now sending the request
request.send();
