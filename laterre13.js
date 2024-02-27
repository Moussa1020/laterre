function sortArgument(arguments) {
    for (let i = 0; i < arguments.length; i++) {
        let imin = i
        for (let j = i; j < arguments.length; j++) {
            if (arguments[j] < arguments[imin]) {
            [arguments[imin], arguments[j]] = [arguments[j], arguments[imin]];
            }
        }
    }
    return arguments
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
if (isString(process.argv[2]) || isString(process.argv[3]) || isString(process.argv[4])) {
    console.log("Veuillez entrer que des chiffres SVP")
    return
}
if (!checkArgument(3)) {
    console.log("Veuillez entrer qu'un seul arguments SVP")
    return
}

// parsing
const arguments = process.argv.slice(2)

// Resolution
const arguments_sort = sortArgument(arguments)

//Affichage
console.log(`La suisse: ${arguments_sort[1]}`)
    


