// Minha solução
function imprimiHash () {
    let hash = ''
    for(let i = 1; i < 8; i++)
        console.log(hash += '#')
}

imprimiHash()

// Solução do livro
for (var line = "#"; line.length < 8; line += "#")
  console.log(line);
