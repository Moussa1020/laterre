var arguments = process.argv

    var result = Math.floor(arguments[2] / arguments[3])
    var reste = arguments[2] % arguments[3]
if (result === 0 || isNaN(reste)) {
    console.log("Erreur")
} else {
    console.log(`résultat: ${result}`)
    console.log(`reste: ${reste}`)
}
    

    

