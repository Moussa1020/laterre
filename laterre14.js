function checkSort(argguments) {
    let sort = true
    for (let i = 0; i < argguments.length; i++) {
        if (argguments[i+1] < argguments[i]) {
            sort = false
            break
        }
    }
    return sort
}

function isString(argument) {
    if (isNaN(argument)) {
        return true
    } else {
        return false
    }
}

// Gestion d'erreur
const nombreArgument = process.argv.slice(2)
for (let i = 0; i < nombreArgument.length; i++) {
    if (isString(nombreArgument[i])) {
        console.log("Veuillez entrer que des chiffres SVP!!!")
        return
    }
}


// parsing
const arguments = process.argv.slice(2)

// Resolution
const arguments_sort = checkSort(arguments)

//Affichage
if (arguments_sort){
    console.log("Trier")
} else {
    console.log("Pas Trier")
}