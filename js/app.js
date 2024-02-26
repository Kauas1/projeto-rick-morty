// "characters": "https://rickandmortyapi.com/api/character",
// "locations": "https://rickandmortyapi.com/api/location",
// "episodes": "https://rickandmortyapi.com/api/episode"

const page = 12
const baseUrl = 'https://rickandmortyapi.com/api'

const loadCharacter = async ()=>{
    const res = await fetch(`${baseUrl}/character?page=${page}`)
    return await res.json()
}

const loadLocation = async ()=>{
    const res = await fetch(`${baseUrl}/location`)
    return await res.json()
}

const loadEpisode = async ()=>{
    const res = await fetch(`${baseUrl}/episode`)
    return await res.json()
}

const loadAllWithPromiseAll = async () => {
    const [character, location, episode] = await Promise.all([
        loadCharacter(), 
        loadLocation(),
        loadEpisode()
    ])
    showCharacter(character.results)
    console.log("Location: ",location)
    console.log("Episode:",episode)
}

loadAllWithPromiseAll()

function showCharacter(characters){
    const characterContainer = document.getElementById('character-container')
    characters.map((character) => {
        const divCharacter = document.createElement('div')
        divCharacter.innerHTML= `
            <img src= "${character.image}" alt="${character.name}"/>
            <article>
            <h3>${character.name}</h3>
            <span>${character.status} - ${character.species}</span>

            <span class="location">Location:</span>
            <a class="location-color" href= "${character.location.url}">${character.location.name}</a>

            <span>Origin:</span>
            <a class="origin-color" href="${character.origin.url}"> ${character.origin.name}</a>
            </article>
        `
        divCharacter.classList.add('character-box')
        characterContainer.appendChild(divCharacter)
    })
}