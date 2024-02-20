var alphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

function showAlphabet (){
    var arguments = process.argv[2]
    var indexFound = alphabets.findIndex((alphabet) => alphabet === arguments);
    var show = ""
    for (let i = indexFound; i < alphabets.length; i++) {
    const alpha = alphabets[i]
    show = show + alpha
    }
    console.log(show)
}

showAlphabet()