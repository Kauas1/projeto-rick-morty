// characters: https://rickandmortyapi.com/api/character,
// locations:  https://rickandmortyapi.com/api/location,
// episodes:   https://rickandmortyapi.com/api/episode

const page = 2
const baseURL = `https://rickandmortyapi.com/api/`

const loadCharacter = async () => {
    const res = await fetch(`${baseURL}character?page=${page}`) 
    return await res.json()
}

const loadLocation = async () => {
    const res = await fetch(`${baseURL}location`)
    return await res.json()
}

const loadEpisode = async () => {
    const res = await fetch (`${baseURL}episode`)
    return await res.json()
}

const loadAllWithPromisseAll = async () => {
    const [character, location, episode] = await Promise.all([
        loadCharacter(),
        loadLocation(),
        loadEpisode()
    ])

    showCharacter( character.results)
}

loadAllWithPromisseAll()

function showCharacter(characters){
    const characterContainer = document.getElementById("character-container")

    characters.map((character) => {
        const divCharacterElement = document.createElement('div')
        divCharacterElement.id = character.id

        divCharacterElement.innerHTML = `
            <img src="${character.image}" alt="Imagem do personagem">
            <article>
                <ul>
                    <li>
                        <h3>${character.name}</h3>
                        <span>${character.status} - ${character.location.name}</span>
                    </li>
                    <li>
                        <span class="location">Location: </span>
                        <a href="${character.location.url}"> ${character.location.name}</a>
                    </li>
                    <li>
                        <span>Origin: </span>
                        <a href="${character.origin.url}"> ${character.origin.name}</span>
                    </li>
                </ul>
            </article>
            
            `;

        divCharacterElement.classList.add('character-box')
        characterContainer.appendChild(divCharacterElement)

        divCharacterElement.addEventListener('click', async () => {
            characterDetails(character.id)
        })
    })

}

function characterDetails(id){
    console.log(id)
    console.log(encryptId(id))
    window.location.href = `./pages/character.html?id=${id}`
}

function encryptId(id) {
    return id.toString(36)
}