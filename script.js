var xhr = new XMLHttpRequest();
var apiEndpoint = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';

xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            var pokemonList = response.results;
            console.log(pokemonList);
            var data = document.getElementById('data');

            pokemonList.forEach(function(pokemon) {
                var card = document.createElement('div');
                card.className = 'col-md-3 col-sm-6 my-sm-3 mb-4';
                card.innerHTML = `
                <div class="card">
                  <div class="card-body text-center rounded" style="border: 0.5px solid blue;">
                    <h6 class="card-title text-black text-center text-capitalize">${pokemon.name}</h6>
                    <a href="${pokemon.url}" class="btn btn-primary text-center"> Detail </a>
                  </div>
                </div>
                `
                data.appendChild(card);
            });
        } else {
            console.log('Error: ' + xhr.status);
        }
    }
};

xhr.open('GET', apiEndpoint, true);
xhr.send();
