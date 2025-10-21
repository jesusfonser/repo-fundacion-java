const arrayPokes = [];

const pokeAdder = (id, name, types, evo=false) => {
    return {id, name, types, evo}
}

arrayPokes.push(pokeAdder(1, "Bulbasaur", ["grass", "poison"]));
arrayPokes.push(pokeAdder(2, "Ivysaur", ["grass", "poison"], "Bulbasaur"));
arrayPokes.push(pokeAdder(3, "Venusaur", ["grass", "poison"], "Ivysaur"));
arrayPokes.push(pokeAdder(4, "Charmander", "fire"));
arrayPokes.push(pokeAdder(5, "Charmeleon", "fire", "Charmander"));
arrayPokes.push(pokeAdder(6, "Charizard", ["fire", "flying"], "Charmeleon"));
arrayPokes.push(pokeAdder(7, "Squirtle", "water"));
arrayPokes.push(pokeAdder(8, "Wartortle", "water", "Squirtle"));
arrayPokes.push(pokeAdder(9, "Blastoise", "water", "Wartortle"));

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
    h2_name.innerText = poke.name;
    div_cardDesc.appendChild(h2_name);

    //logica para uno o dos botones con los tipos
    if (Array.isArray(poke.types)) {
        const [type1, type2] = poke.types;

        const button_type1 = document.createElement("button");
        button_type1.innerText = type1.toUpperCase();
        div_cardDesc.appendChild(button_type1);

        const button_type2 = document.createElement("button");
        button_type2.innerText = type2.toUpperCase();
        div_cardDesc.appendChild(button_type2);
    } else {
        const type = poke.types;

        const button_type = document.createElement("button");
        button_type.innerText = type.toUpperCase();
        div_cardDesc.appendChild(button_type);
    }

    const div_evo = document.createElement("div");
    !poke.evo ? div_evo.setAttribute("class", "desc__evo desc__evo--inv") : div_evo.setAttribute("class", "desc__evo");
    div_cardDesc.appendChild(div_evo);

    const p_evo = document.createElement("p");
    p_evo.innerText = "Evoluciona de:";
    div_evo.appendChild(p_evo);

    const h3_evo = document.createElement("h3");
    h3_evo.innerText = !poke.evo ? "Lorem Ipsum" : poke.evo;
    div_evo.appendChild(h3_evo);
}


arrayPokes.forEach((ele) => cardGenerator(ele))