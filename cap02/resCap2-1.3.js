// Até onde cheguei mais decidi olhar a resposta e fazer junto e testando tudo
var caracter = ""
var size = 8
for (var row = 0; row < (size / 2); row ++) {
    if(row < 4) {
        caracter += "# "
            for (var col = 0; col < 5; col++) {
                console.log("nova linha" + "\n")
            }
    }
}


// Solucção do livro
var size = 8
var caracter = ""

for (var y = 0; y < size; y++) {
    for (var x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
            caracter += " "
        } else {
            caracter += "#"
        }
    }
    caracter += "\n"
}
console.log(caracter)
