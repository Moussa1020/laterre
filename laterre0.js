const start = 97;
const end = 122;

function showAlphabet (){
    let show = ""
    for (let i = start; i <= end; i++) {
    const alpha = String.fromCharCode(i)
    show += alpha
    }
    return show
}

console.log(showAlphabet())