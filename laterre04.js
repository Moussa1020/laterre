function evenOdd(result){
    result = argument % 2
    if (result === 0 || result === -0) {
        return true
    } else if (result !== 0 || result !== -0) {
        return false
    }
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
if (!checkArgument(1)) {
    console.log("Veuillez entrer qu'un seul argument")
    return
}

// parsing
const argument = process.argv[2]

// Resolution
const even_odd = evenOdd(argument)

//Affichage
if (even_odd) {
    console.log("Pair")
} else {
    console.log("Impair")
}