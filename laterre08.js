function power(firstArgument, secondargument) {
    let power = firstArgument
    for (let i = 1; i < secondargument; i++) {
        power *= firstArgument
    }
    return power
}

function checkArgument(nombreArgument) {
    const argument = process.argv.slice(2).length
    if (argument === nombreArgument) {
        return true
    } else {
        return false
    }
}

function isString(argument) {
    if (isNaN(argument)) {
        return true
    } else {
        return false
    }
}

// Gestion d'erreur
if (isString(process.argv[2])) {
    console.log("Veuillez entrer que des chiffres SVP")
    return
}
if (!checkArgument(2)) {
    console.log("Veuillez entrer que 2 arguments SVP")
    return
}

// parsing
const firstArgument = process.argv[2]
const secondArgument = process.argv[3]

// Resolution
const argument_power = power(firstArgument, secondArgument)

//Affichage
console.log(argument_power)