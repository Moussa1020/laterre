function convert12_24(argument) {
    let hour = parseInt(argument[0] + argument[1])
    let minute = parseInt(argument[3] + argument[4])
    const time_symbole = (argument[5] + argument[6])
    if (time_symbole == "am") {
        return [hour, minute]
    } else {
        hour += 12
    }
    return [hour, minute]
}

function checkTime(argument) {
    argument = argument.toLowerCase()
    const time_format = /^(0\d|1[0-2])\:[0-5]\d(am|pm)$/
    if(time_format.test(argument)){
        return true
    } else {
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

// Gestion d'erreur
if (!checkArgument(1)) {
    console.log("Veuillez entrer qu'un seul argument SVP")
    return
}
if (!checkTime(process.argv[2])) {
    console.log("L'heure doit etre comprise entre 00h et 12h et doit etre du format 00:00mm")
    return
}

// parsing
const argument = process.argv[2]

// Resolution
const time_convert = convert12_24(argument)

//Affichage
console.log(`${time_convert[0]}:${time_convert[1]}`)
