var arguments = process.argv[2];
var result = arguments % 2;

if (isNaN(result)){
    console.log("T'es bete ou quoi imbecile")
} else {
    if (result === 0 || result === -0) {
        console.log("Pair")
    } else if (result !== 0 || result !== -0) {
        console.log("Impair")
}}
