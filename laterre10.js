var arguments = process.argv[2];    

if (arguments == 1 || arguments == 0) {
    console.log(`Non, ${arguments} n'est pas un nombre premier`)
} else {
    var nbrePremier = true
    for (let i = 2; i < arguments; i++) {
        if (arguments % i === 0) {
            nbrePremier = false
            break
        }
    }
    if (nbrePremier === true) {
        console.log(`Oui, ${arguments} est un nombre premier`)
    } else {
        console.log(`Non, ${arguments} n'est pas un nombre premier`)
    }

}