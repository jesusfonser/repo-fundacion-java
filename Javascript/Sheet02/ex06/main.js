function saludar(ciudad){
    console.log(`Hola, soy ${this.nombre} de ${ciudad}`);
}

const saludarLuis = saludar.bind({ nombre: 'Luis' })

saludarLuis("Madrid")

const persona = { nombre: "Jesús" };

saludar.call(persona, "Madrid");
saludar.apply(persona, ["Madrid"]);

function invocarCon(ctx, fn, ...args){
    fn.apply(ctx, args)
}

invocarCon({nombre:'Ada'}, saludar, 'Zaragoza')


