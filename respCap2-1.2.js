function fizzBuzz () {
  for(let i = 0; i <= 100; i++) {
    //  Solução 1 funcionando
    // if (i % 3 === 0 && i % 5 === 0) {
    //   console.log('FizzBuzz ==> ' , i)
    // } else if (i % 3 === 0) {
    //   console.log('Fizz ==> ' , i)
    // } else if (i % 5 === 0) {
    //   console.log('Buzz ==> ' , i)
    // } else {
//         console.log('Número ==> ' , i)
//       }

    //  Solução 2 funcionando
//     if(i % 3 === 0 || i % 5 === 0) {
//       if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz ==> ' , i)
//       } else if (i % 3 === 0) {
//           console.log('Fizz ==> ' , i)
//       } else if(i % 5 === 0) {
//         console.log('Buzz ==> ' , i)
//       }
//     } else {
//       console.log('Número ==> ' , i)
//     }
    
//   }
  
  // Solução do livro
  for (var n = 1; n <= 100; n++) {
    var output = "";
    if (n % 3 == 0)
      output += "Fizz";
    if (n % 5 == 0)
      output += "Buzz";
    console.log(output || n);
  }
    
}

fizzBuzz()
