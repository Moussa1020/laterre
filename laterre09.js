function squareRoot(argument) {
    const precision = 0.00001;
    let square = argument
    while (-(argument - square*square) > precision) {
        square = (square + argument / square) / 2
    }
    return square
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
const argument_sqaure = squareRoot(argument)

//Affichage
var arguments = process.argv[2];

var racine = arguments
var precision = 0.00001;


if (isNaN(arguments) || process.argv[3] != undefined) {
    console.log("Erreur")
} else {
    while (Math.abs(arguments - racine*racine) > precision) {
    racine = (racine + arguments / racine) / 2
    }
    console.log(Math.floor(racine))
}
