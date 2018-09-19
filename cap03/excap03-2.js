// Solução do livro
function isEven(n) {
  if (n == 0){
  return true;}
  else if (n == 1){
  return false;}
  else if (n < 0){
    return isEven(-n);}
  else{
    return isEven(n - 2);}
}


console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false

// Minha solução
// function isEven(n) {

//   let count = 0
//   function findIsEven(num) {
//     if (num < 0) {
//       return 'Número negativo'
//     } else if (num % 2 === 0) {
//       return true
//     } else if (num % 2 !== 0) {
//       return false
//     } else {
//       console.log('valor', num, count++)
//       return findIsEven(n)
//     }
    
//   }
  
//   return findIsEven(n)
  
// }


console.log(isEven());

