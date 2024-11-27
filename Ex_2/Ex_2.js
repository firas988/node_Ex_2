let num=3;
while(num<237){
  prime_numbers(num++);
}

function prime_numbers(num1){
  let i=2;
  while(i<num1){
    if(num1%i++==0)
      return false;
  }
  console.log(num1);
}