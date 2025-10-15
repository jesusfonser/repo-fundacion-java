function etiquetar(texto='N/A', prefijo=`TS-${Date.now()}`){
    return `${prefijo}:${texto}`
}

console.log(/^TS-\d+:N\/A$/.test(etiquetar()));

function sumatorio(base=0, ...nums){
    const final = nums.reduce((a, b)=>{
        if(typeof(b) != "number"){
            return a;
        } 
            return a + b}, base)

    return final
}

console.log(sumatorio(10, 1, 2, '3', 4)); // 17

function maximoDe(lista){
    return Math.max(...lista)
}

console.log(maximoDe([1,9,3]));