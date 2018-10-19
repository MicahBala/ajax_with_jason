// Create a JSON file
let info = {
  full_name: 'Micah Bala',
  title: 'Mr.',
  links: [
    { LinkedIn: 'https://linkedin/in/micahbala' },
    { facebook: 'https://facebook.com/micahbala' },
    { Twitter: 'https://twitter.com/micahbala' },
    { GitHub: 'https://github.com' }
  ]
};

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
