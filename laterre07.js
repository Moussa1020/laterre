function stringLenght(argument) {
    let argumentlenght = 0
    for (let i = 0; argument[i] !== undefined; i++) {
        argumentlenght += 1
    }
    return argumentlenght
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
const argument_lenght = stringLenght(argument)

//Affichage
console.log(argument_lenght)