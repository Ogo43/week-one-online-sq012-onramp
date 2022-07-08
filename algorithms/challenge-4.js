function sumTwoSmallestNums(arr) {
    // remove smallest numbers
    var min1 = Math.min(...arr);
      console.log({min1})
   for( let i=0; i < arr.length; i++) {

      if(arr[i] === min1){
       
        arr.splice(i, 1); 
      };
    
     // sum= sum + arr[i]
   }
   var min2= Math.min(...arr);  
   console.log({min2})
  return min1 + min2
 
 }
  module.exports =sumTwoSmallestNums