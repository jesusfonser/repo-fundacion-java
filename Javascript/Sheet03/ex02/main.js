function stableNumericSort(arr) {
    let arrayNuevo = arr.slice();
    return arrayNuevo.sort()
}

const arrayViejo = [3, 2, 1];

console.log(stableNumericSort(arrayViejo))
console.log(arrayViejo)