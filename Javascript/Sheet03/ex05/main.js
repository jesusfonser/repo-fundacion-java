function groupBy(arr, fn) {
    return arr.reduce((acc, el) => {
        let letter = fn(el);
        console.log(letter);
        console.log(acc);
        if (!acc[letter]) {
            acc[letter] = [];
            acc[letter].push(el)
        } else {
            acc[letter].push(el);
        }
        return acc
    }, {} )
}

console.log(groupBy(['peras', 'peral', 'manzana', 'madera'], s => s[0]))
// => { p: ['peras','peral'], m: ['manzana','madera'] }