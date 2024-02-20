var arguments = process.argv[2];
var argumentsSplit = arguments.split(":");

if (process.argv[3] !== undefined) {
    console.log("Erreur")
}else if (argumentsSplit[0] == 12 || argumentsSplit[0] < 12) {
    console.log(arguments + " AM")
}else if (argumentsSplit[0] == 24  ) {
    var hours = "00"
    console.log(`${hours}:${argumentsSplit[1]} PM`)
} else {
    var hours = argumentsSplit[0] - 12
    console.log(`${hours}:${argumentsSplit[1]} PM`)
}