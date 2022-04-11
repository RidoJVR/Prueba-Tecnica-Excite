const api= "https://rickandmortyapi.com/api/character"

const gdata=(apiURL)=>{
    return fetch(apiURL)
        .then(response => response.json())
        .then(json =>{ printD(json)})
        .catch(error => {console.error('Error: ',error)})
}

const printD = (data) =>{
    let html = '';
    data.results.forEach(per => {
        html += '<div class="col mt-2" >';
            html += '<div class="card" style ="width: 20rem;" >'
            html += `<img src="${per.image} " class="card-img-top" alt="...">`
            html += ' <div class="card-body">'
            html += `<h5 class="card-title">${per.name}</h5>`
            html += `<p class="card-text">Genero :${per.gender}</p>`
            html += `<p class="card-text">Primer Especie :${per.species}</p>`
            html += '</div>'
            html += '</div>'
        html +='</div>'
    });
    document.getElementById('infoC').innerHTML = html
}

gdata(api);