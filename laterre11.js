function convert24_12(argument) {
    let hour = parseInt(argument[0] + argument[1])
    let minute = parseInt(argument[3] + argument[4])
    let time_symbole = "am"
    if (hour <= 12 || hour === 0) {
        return [hour, minute, time_symbole]
    } else {
        hour -= 12
        time_symbole = "pm"
    }
    return [hour, minute, time_symbole]
}

function checkTime(argument) {
    const time_format = /^([0-1]\d|2[0-3])\:[0-5]\d$/
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
    console.log("L'heure doit etre comprise entre 00h et 23h et doit etre du format 00:00")
    return
}

// parsing
const argument = process.argv[2]

// Resolution
const time_convert = convert24_12(argument)

//Affichage
console.log(`${time_convert[0]}:${time_convert[1]}${time_convert[2]}`)

