var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

function showAlphabet (){
    var show = ""
    for (let i = 0; i < alphabet.length; i++) {
    const alpha = alphabet[i]
    show = show + alpha
    }
    console.log(show)
}

showAlphabet()