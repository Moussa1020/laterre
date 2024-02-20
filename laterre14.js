var arguments = []
var sort = []
for (let i = 2; i < process.argv.length; i++) {
    arguments.push(parseInt(process.argv[i]))
    sort.push(parseInt(process.argv[i]))
}

for (let i = 0; i < sort.length; i++) {
    var imin = i
        for (let j = i; j < sort.length; j++) {
            if (sort[j] < sort[imin]) {
            [sort[imin], sort[j]] = [sort[j], sort[imin]];
            }
        }
}

var trier = true;
for (let i = 0; i < sort.length; i++) {
    if (arguments[i] != sort[i]) {
        trier = false;
        break
    }
}

if (isNaN(process.argv[2])) {
    console.log("Erreur, veuillez entrer que des chiffres")
    return
} else if (trier === true){
    console.log("Trier")
} else {
    console.log("Pas Trier")
}