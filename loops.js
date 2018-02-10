//for loop
function forLoop (myArray) {
  
  for ( let i = 0; i < 25; i++) {
 
    if (i === 1) {
      myArray.push(`I am ${i} strange loop.`);
      console.log(myArray[i])
    }
    
    else if (i !== 1) {
      myArray.push(`I am ${i} strange loops.`);
      console.log(myArray[i])
    }
    
  }
  return myArray;
}


//while loop
function whileLoop (num) {
  while (num > 0) {
    console.log (--num)
  }
  return "done";
}

 
//do while loop
function doWhileLoop (differentArray) {
  
  function maybeTrue() {
  return Math.random() >= 0.5
}
  
  
  do {
    
  differentArray.length - 1;
  
  } while (differentArray.length > 0 && maybeTrue())
  
  return differentArray;
}



