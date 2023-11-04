document.getElementById('searchButton').addEventListener('click', () => {
    const searchTerm = document.getElementById('searchInput').value;
    fetch(`https://swapi.dev/api/people/?search=${searchTerm}`)
        .then(response => response.json())
        .then(data => displayCharacterInfo(data.results))
        .catch(error => console.error('Error:', error));
});

function displayCharacterInfo(characters) {
    const characterInfoElement = document.getElementById('characterInfo');
    characterInfoElement.innerHTML = '';

    characters.forEach(character => {
        const characterCard = document.createElement('div');
        characterCard.classList.add('character-card');

        const characterName = document.createElement('div');
        characterName.classList.add('character-name');
        characterName.textContent = character.name;

        const characterInfo = document.createElement('div');
        characterInfo.classList.add('character-info');
        characterInfo.innerHTML = `
            <p><span>Birth Year:</span> ${character.birth_year}</p>
            <p><span>Height:</span> ${character.height} cm</p>
            <p><span>Gender:</span> ${character.gender}</p>
            <p><span>Eye Color:</span> ${character.eye_color}</p>
            <p><span>Hair Color:</span> ${character.hair_color}</p>
        `;

        characterCard.appendChild(characterName);
        characterCard.appendChild(characterInfo);

        characterInfoElement.appendChild(characterCard);
    });
}