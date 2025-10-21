const searchbar = document.querySelector("input");
const dex_div = document.querySelector(".pokedex__grid")

async function getInfo() {
    const allPokeAPI = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
    const allPoke = await allPokeAPI.json();

    return allPoke
}


const pokeAdder = async (id) => {
    const infoPokeAPI = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const infoPoke = await infoPokeAPI.json();

    const namePoke = infoPoke.species.name;
    let typePoke = undefined;
    

    switch (infoPoke.types.length) {
        case 1:
            typePoke = infoPoke.types[0].type.name;
            break;
        case 2:
            typePoke = [infoPoke.types[0].type.name, infoPoke.types[1].type.name]
            break;
    }


    /*
   [ { slot: 1,
       type: { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' } },
     { slot: 2,
       type: { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' } } ],
    */

    const evoPokeAPI = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${namePoke}/`);
    const evoPokeAPIjson = await evoPokeAPI.json();
    const evoPoke1 = evoPokeAPIjson.evolves_from_species;
    
    let evoPoke = undefined;

    evoPoke1 ? evoPoke = evoPoke1.name : evoPoke = false;
    
    return {id, namePoke, typePoke, evoPoke}
}


/*
arrayPokes.push(pokeAdder(1, "Bulbasaur", ["grass", "poison"]));
arrayPokes.push(pokeAdder(2, "Ivysaur", ["grass", "poison"], "Bulbasaur"));
arrayPokes.push(pokeAdder(3, "Venusaur", ["grass", "poison"], "Ivysaur"));
arrayPokes.push(pokeAdder(4, "Charmander", "fire"));
arrayPokes.push(pokeAdder(5, "Charmeleon", "fire", "Charmander"));
arrayPokes.push(pokeAdder(6, "Charizard", ["fire", "flying"], "Charmeleon"));
arrayPokes.push(pokeAdder(7, "Squirtle", "water"));
arrayPokes.push(pokeAdder(8, "Wartortle", "water", "Squirtle"));
arrayPokes.push(pokeAdder(9, "Blastoise", "water", "Wartortle"));
*/

const cardGenerator = (poke) => {
    const parentDiv = document.getElementsByClassName("pokedex__grid")[0];

    const div_gridCard = document.createElement("div");
    div_gridCard.setAttribute("class", "grid__card");
    parentDiv.appendChild(div_gridCard);
    
    const div_cardImg = document.createElement("div");
    div_cardImg.setAttribute("class", "card__img")
    div_gridCard.appendChild(div_cardImg);

    const imgPoke = document.createElement("img");
    imgPoke.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`;
    div_cardImg.appendChild(imgPoke);

    const p_id = document.createElement("p");
    p_id.innerText = `ID / ${poke.id}`;
    p_id.setAttribute("class", "img__id");
    div_cardImg.appendChild(p_id);

    const div_cardDesc = document.createElement("div");
    div_cardDesc.setAttribute("class", "card__desc");
    div_gridCard.appendChild(div_cardDesc);

    const h2_name = document.createElement("h2");
    const nameOfPoke = poke.namePoke;
    const firstLetterName = nameOfPoke.charAt(0).toUpperCase();
    const truePokeName = firstLetterName + nameOfPoke.slice(1);

    h2_name.innerText = truePokeName;
    div_cardDesc.appendChild(h2_name);

    //logica para uno o dos botones con los tipos
    if (Array.isArray(poke.typePoke)) {
        const [type1, type2] = poke.typePoke;

        const button_type1 = document.createElement("button");
        button_type1.innerText = type1.toUpperCase();
        div_cardDesc.appendChild(button_type1);

        const button_type2 = document.createElement("button");
        button_type2.innerText = type2.toUpperCase();
        div_cardDesc.appendChild(button_type2);
    } else {
        const type = poke.typePoke;

        const button_type = document.createElement("button");
        button_type.innerText = type.toUpperCase();
        div_cardDesc.appendChild(button_type);
    }

    const div_evo = document.createElement("div");
    !poke.evoPoke ? div_evo.setAttribute("class", "desc__evo desc__evo--inv") : div_evo.setAttribute("class", "desc__evo");
    div_cardDesc.appendChild(div_evo);

    const p_evo = document.createElement("p");
    p_evo.innerText = "Evoluciona de:";
    div_evo.appendChild(p_evo);

    const h3_evo = document.createElement("h3");
    h3_evo.innerText = !poke.evoPoke ? "Lorem Ipsum" : poke.evoPoke;
    div_evo.appendChild(h3_evo);
}


async function fillPage(start, end) {
    for (let i = start; i <= end; i++){
        const cardData = await pokeAdder(i);
        cardGenerator(cardData);
    }
}


const searcher = async (query, apiInfo) => {
    const arrayPokesSearch = []
    
    apiInfo.results.forEach(ele => {
        if (ele.name.includes(query.toLowerCase())) {
            arrayPokesSearch.push(ele);
        }
    })

    for (ele of arrayPokesSearch) {
        const arrayURL = ele.url.split("/");
        const idFromPoke = arrayURL[6];

        const objPokeSearch = await pokeAdder(idFromPoke);
        cardGenerator(objPokeSearch);
    }

}




const initiationApp = (async () => {
    let debounceTimeout;
    const allInfo = await getInfo();
    await fillPage(1, 20);
    searchbar.addEventListener("input", async (e) => {
        clearTimeout(debounceTimeout)

        debounceTimeout = setTimeout(async () => {
            dex_div.innerHTML = '';
            await searcher(e.target.value, allInfo)
        }, 1500)

    })
})()


/*
pokeAdder(1).then(res => {
    arrayPokes.push(res)
} );
/*
for (let i = 1; i <= 9; i++){
    pokeAdder(i).then(poke => {
        arrayPokes.push(poke)
    } )
}


arrayPokes.forEach((ele) => cardGenerator(ele))

*/