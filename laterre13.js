var suise = [parseInt(process.argv[2]), parseInt(process.argv[3]), parseInt(process.argv[4])]

if (process.argv[2] == process.argv[3] && process.argv[3] == process.argv[4]) {
    console.log("Erreur")
} else if (process.argv[5] != undefined) {
    console.log("Pas plus que 3 argument BG")
} else {
    for (let i = 0; i < suise.length; i++) {
    var imin = i
        for (let j = i; j < suise.length; j++) {
            if (suise[j] < suise[imin]) {
            [suise[imin], suise[j]] = [suise[j], suise[imin]];
            }
        }
    }
    console.log(`Suisse: ${suise[1]}`)
}


    


