var arguments = process.argv[2];
var argumentsSplit = arguments.split("");
var hour = argumentsSplit[0] + argumentsSplit[1]
var minute = argumentsSplit[3] + argumentsSplit[4]

if (process.argv[3] !== undefined || hour > 12) {
    console.log("Erreur")
}else if (argumentsSplit[2] != ":") {
    console.log("La date doit etre au format 00:00")
}else if (argumentsSplit[0] == 12  ) {
    var hours = "00"
    console.log(`${hours}:${argumentsSplit[1]} PM`)
} else {
    var hours = parseInt(hour) + 12
    console.log(`${hours}:${minute}`)
}