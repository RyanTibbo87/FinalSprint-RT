// Fetch API & forEach() loop to display in console.

fetch("sprint.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // log the data to console
    processData(data); // Then process it
  })

  .catch((error) => console.error("Error fetching data: ", error));

function processData(data) {
  data.forEach((person) => {
    console.log(
      `   Name:           ${person.first} ${person.last}
   Age:            ${person.age}
   Gender:         ${person.gender}
   Email:          ${person.email} 
   Country:        ${person.country} `
    );
  });
}
