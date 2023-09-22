function buscarDados() {
    fetch('https://pokeapi.co/api/v2/pokemon')
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            let lista = ''
            let pokemons = response.results
            for (const pokemon of pokemons) {
                console.log(pokemon.name)
                lista += '<li>' + pokemon.name + '</li>'

            }
            console.log(lista)
            
            let ul = document.getElementById('pokemons')
            ul.innerHTML = lista
        })
};