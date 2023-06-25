const apiUrl = 'http://localhost:3000/characters';
const animalNamesList = document.getElementById('animal-names');
const animalDetailsContainer = document.getElementById('animal-details');
const voteBtn = document.getElementById('vote-btn');
const resetBtn = document.getElementById('reset-btn');
const addAnimalForm = document.getElementById('add-animal-form');

// Fetch all animal names
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    data.forEach(animal => {
      const listItem = document.createElement('li');
      listItem.textContent = animal.name;
      listItem.addEventListener('click', () => showAnimalDetails(animal.id));
      animalNamesList.appendChild(listItem);
    });
  })
  .catch(error => console.log('Error fetching animal names:', error));

// Show animal details
function showAnimalDetails(animalId) {
  fetch(`${apiUrl}/${animalId}`)
    .then(response => response.json())
    .then(animal => {
      animalDetailsContainer.innerHTML = `
        <h3>${animal.name}</h3>
        <img src="${animal.image}" alt="${animal.name}">
        <p>Votes: ${animal.votes}</p>
      `;
      voteBtn.addEventListener('click', () => {
        voteForAnimal(animalId, animal.votes + 1);
      });
    })
    .catch(error => console.log('Error fetching animal details:', error));
}

// Vote for an animal
function voteForAnimal(animalId, votes) {
  fetch(`${apiUrl}/${animalId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ votes })
  })
    .then(response => response.json())
    .then(updatedAnimal => {
      const votesElement = document.querySelector('#animal-details p');
      votesElement.textContent = `Votes: ${updatedAnimal.votes}`;
    })
    .catch(error => console.log('Error voting for animal:', error));
}

// Reset votes for all animals
resetBtn.addEventListener('click', () => {
  fetch(apiUrl, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ votes: 0 })
  })
    .then(response => response.json())
    .then(updatedAnimals => {
      const votesElements = document.querySelectorAll('#animal-details p');
      votesElements.forEach(element => {
        element.textContent = 'Votes: 0';
      });
    })
    .catch(error => console.log('Error resetting votes:', error));
});

// Add a new animal
addAnimalForm.addEventListener('submit', event => {
  event.preventDefault();
  const nameInput = document.getElementById('name');
  const imageInput = document.getElementById('image');
  const newAnimal = {
    name: nameInput.value,
    image: imageInput.value,
    votes: 0
  };
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newAnimal)
  })
    .then(response => response.json())
    .then(addedAnimal => {
      const listItem = document.createElement('li');
      listItem.textContent = addedAnimal.name;
      listItem.addEventListener('click', () => showAnimalDetails(addedAnimal.id));
      animalNamesList.appendChild(listItem);
      nameInput.value = '';
      imageInput.value = '';
    })
    .catch(error => console.log('Error adding animal:', error));
});
