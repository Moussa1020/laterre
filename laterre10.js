function primeNumber(argument) {
    let prime_number = true
    if (argument == 1 || argument == 0) {
        prime_number = false
    }
    for (let i = 2; i < argument; i++) {
         if (argument % i === 0) {
            prime_number = false
            break
        }
    }
    return prime_number
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
    console.log("Veuillez entrer qu'un seul arguments SVP")
    return
}

// parsing
const argument = process.argv[2]

// Resolution
const argument_prime_number = primeNumber(argument)

//Affichage
if (argument_prime_number) {
    console.log(`Oui, ${argument} est un nombre premier`)
} else {
    console.log(`Non, ${argument} n'est pas un nombre premier`)
}