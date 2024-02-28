
const urlParams = new URLSearchParams(window.location.search)
const idParam = urlParams.get('id')
console.log(idParam)

function descryptId(id){
    return parseInt(id,36)
}