const data = [1, [2, 3], [[4], 5]];

function flatAll(arr) {
    let result = arr;
    
    while (result.some(x => Array.isArray(x))) {
        result = result.flatMap(x => x)
        
    }

    return result;
}

console.log(flatAll(data))