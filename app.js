console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let num = 1; num <= 100; num++) {
  if (num % 2 == 1) {
    console.log(num);
  } else {
    continue;
  }

}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for(let i = 0; i <= 100; i++){
    if( i % 3 == 0 && i %5 == 0) {
        console.log(`${i} FIZZBUZZ`);
    }else if (i %3 == 0){
        console.log(`${i} Fizz`);
    }else if (i%5 == 0){
        console.log(`${i} BUZZ`);
    }else{
        console.log(i);
    }
}