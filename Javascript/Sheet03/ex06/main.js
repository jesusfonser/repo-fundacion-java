const text = 'hola hola adios HOLA';

const arrNew = text.split(' ');

console.log(arrNew);

function calculoFrecuencia(arr){
    const lowerArr = arr.map(x => x.toLowerCase());
    const daMap = new Map();

    lowerArr.forEach((el) =>{
        if(daMap.has(el)){
            const num = daMap.get(el) + 1
            daMap.set(el, num);
        } else{
            daMap.set(el, 1)
        }
    })

    return daMap;
}

const arrMap = Array.from(calculoFrecuencia(arrNew));
const arrSorted = arrMap.sort((a, b) => b[1] - a[1]);
console.log(arrSorted.reduce((acc, el) =>{
    acc.push(el[0])
    return acc}, []))
