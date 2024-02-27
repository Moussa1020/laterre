 function division(firstargument, secondargument){
    if (secondargument === "0" || secondargument > firstargument) {
        return false
    } else {
        const result = Math.floor(firstargument / secondargument)
        const reste = firstargument % secondargument
        return [result, reste]
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
if (isString(process.argv[2]) || isString(process.argv[3])) {
    console.log("Veuillez entrer que des chiffres SVP")
    return
}
if (!checkArgument(2)) {
    console.log("Veuillez entrer que 2 arguments")
    return
}

// parsing
const firstargument = process.argv[2]
const secondargument = process.argv[3]

// Resolution
const result = division(firstargument, secondargument)

//Affichage
if (!result) {
    console.log("Erreur")
} else {
    console.log(`Le resultat est: ${result[0]}`)
    console.log(`Le reste est: ${result[1]}`)
}
