const users = [
    { id: 1, name: 'Ana', age: 28 },
    { id: 2, name: 'Luis', age: 17 },
    { id: 3, name: 'Zoe', age: 34 },
];
    

function mayoresMayusculos(arr) {
    let result = arr.slice();

    result = result.filter(x => x.age >= 18);
    result = result.map(x => x.name.toUpperCase());
    result.sort();
    return result
}

console.log(mayoresMayusculos(users))
