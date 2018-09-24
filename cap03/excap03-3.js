
// Solução do livro
// function countChar(string, ch) {
//   var counted = 0;
//   for (var i = 0; i < string.length; i++)
//     if (string.charAt(i) == ch)
//       counted += 1;
//   return counted;
// }

// function countBs(string) {
//   return countChar(string, "B");
// }

// Minha solução
function countChar (argString, argChar) {
  let counted = 0
  for(let i = 0; i < argString.length; i++) {
    if ( argString.charAt(i) === argChar ) counted++
  }
  return counted
}

function countBs (argString) {
  return countChar(argString, "B")
}

console.log(countBs("BBC"));
// => 2

console.log(countChar("kakkerlak", "k"));
// => 4