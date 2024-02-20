var arguments = process.argv;
var argumentsSplite = arguments[2].split("")

var show = ""
for (let i = argumentsSplite.length; i > 0; i--) {
    const reverse = argumentsSplite[i-1];
    show = show + reverse
}
console.log(show)
