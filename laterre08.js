var firstArgument = process.argv[2];
var secondArgument = process.argv[3];

if (isNaN(firstArgument) || isNaN(secondArgument) || typeof process.argv[4] != "undefined") {
    console.log("Erreur Bg")
} else {
    var result = firstArgument
    for (let i = 1; i < secondArgument; i++) {
    result = result * firstArgument
}
console.log(result)
}

