function fizzBuzz () {
  for(let i = 0; i <= 20; i++) {
    // if(i % 3 === 0) {
    //   console.log('Fizz ==> ' , i)
    // } else if( i % 5 === 0 ) {
    //   console.log('Buzz ==> ' , i)
    // } else if( i % 3 === 0 && i % 5 === 0 ) {
    //   console.log('FizzBuzz ==> ' , i)
    // } else {
    //   console.log('não é divisível por 3 e nem 5 ==> ', i )  
    // }

    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz ==> ' , i)
    } else if (i % 3 === 0) {
      console.log('Fizz ==> ' , i)
    } else if (i % 5 === 0) {
      console.log('Buzz ==> ' , i)
    }
    
  }
    
}

fizzBuzz()
