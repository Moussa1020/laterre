function reverse(argument){
    let argumentReverse = ""
    for (let i = argument.length; i > 0; i--) {
        const items = argument[i-1];
        argumentReverse += items
    }
    return argumentReverse
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
if (!isString(process.argv[2])) {
    console.log("Veuillez entrer que des lettres SVP")
    return
}
if (!checkArgument(1)) {
    console.log("Veuillez entrer qu'un seul arguments SVP")
    return
}

// parsing
const argument = process.argv[2]

// Resolution
const argument_reverse = reverse(argument)

//Affichage
console.log(argument_reverse)