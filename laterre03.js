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

function showAlphabet (start, end){
    let alphabets = ""
    for (let i = start; i <= end; i++) {
    const alphabet = String.fromCharCode(i)
    alphabets += alphabet
    }
    return alphabets
}

// Gestion d'erreur
if (!isString(process.argv[2])) {
    console.log("Veuillez entrer que des lettres SVP")
    return
}
if (!checkArgument(1)) {
    console.log("Veuillez entrer qu'un seul argument")
    return
}

// Parsing
const argument = process.argv[2]
const start = argument.charCodeAt(0)
const end = 122

//resolution
const alphabets = showAlphabet(start, end)

//Affichage
console.log(alphabets)
