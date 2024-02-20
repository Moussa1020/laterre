var argumentsSplite = process.argv[2].split("")
var lastCaracter = argumentsSplite.slice(-1)

if (typeof process.argv[3] != "undefined" || typeof lastCaracter[0] === Number || !isNaN(process.argv[2])) {
    console.log("Erreur my g")
} else {
    var caracterLenght = argumentsSplite.lastIndexOf(lastCaracter[0]) + 1;
    console.log(caracterLenght)
}