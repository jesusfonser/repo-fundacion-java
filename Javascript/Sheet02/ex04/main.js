function crearContador(inicio = 0, paso = 1) {
  let contador = inicio;

  return function () {
    contador += paso;
    return contador;
  };
}

const llamadas = crearContador(1, 2);
console.log(llamadas());
console.log(llamadas());

const cuadrado = (n) => n * n;

function memoizar(fn) {
  const cache = {};
  
  return function (...args) {
    if (cache[args.toString()]) {
      return cache[args.toString()];
    }

    
    cache[args.toString()] = fn(...args);
    return cache[args.toString()];
  };
}

const contarLlamadas = () => {
  let n = 0;
  const f = (x) => {
    n++;
    return x * x;
  };
  return {
    f,
    get llamadas() {
      return n;
    },
  };
};
const contador = contarLlamadas();
const mf = memoizar(contador.f);
mf(5);
mf(5);
console.log(contador.llamadas);
