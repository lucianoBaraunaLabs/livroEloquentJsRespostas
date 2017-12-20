function fizzBuzz () {
  for(let i = 0; i <= 100; i++) {
    //  Solução 1 funcionando
    // if (i % 3 === 0 && i % 5 === 0) {
    //   console.log('FizzBuzz ==> ' , i)
    // } else if (i % 3 === 0) {
    //   console.log('Fizz ==> ' , i)
    // } else if (i % 5 === 0) {
    //   console.log('Buzz ==> ' , i)
    // }

    //  Solução 2 funcionando
    if(i % 3 === 0 || i % 5 === 0) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz ==> ' , i)
      } else if (i % 3 === 0) {
          console.log('Fizz ==> ' , i)
      } else if(i % 5 === 0) {
        console.log('Buzz ==> ' , i)
      }
    } else {
      console.log('Número ==> ' , i)
    }
    
  }
    
}

fizzBuzz()
