var arguments = process.argv[2];

var racine = arguments
var precision = 0.00001;

while (Math.abs(arguments - racine*racine) > precision) {
    racine = (racine + arguments / racine) / 2
}
console.log(Math.floor(racine))