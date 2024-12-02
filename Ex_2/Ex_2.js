

//for loop that prints every prime number before 237
for(let i = 1; i<237 ; i++){

  //prime flag declaration
   let prime = true;

 if(i == 2 )
    prime = false;
else  
//for loop that checks if the number is prime 
//prime flag switches to false if not prime
//prime flag stays as true if prime
 for(let j = 2 ; j<i && prime ; j++)
    if(i%j==0)
        prime = false;

if(prime)
  console.log(i);
        
}
