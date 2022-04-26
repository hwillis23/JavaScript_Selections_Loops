console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let num =1; num <= 100; num++){
    if( num % 2 == 1){
        console.log(num);
    } else{
        continue;
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let num = 1; num <= 100; num++){
    if( num % 3 == 0) {
        console.log(`FIZZ`); 
    } else if (num % 5 == 0) {
        console.log(`BUZZ`);
    } else if( num % 3 == 0 && num % 5 == 0) {
        console.log(`FIZZBUZZ`);
    }else {
        console.log(num);
    }
 }