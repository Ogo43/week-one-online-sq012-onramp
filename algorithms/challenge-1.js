function secondLargest(arr) {
    //if and empty arr return 0
    if(arr.length===0){
        return 0
      }
     //if one item return that item 
        if(arr.length ===1){
        return arr[0]
      }
      //actual code
      let firstMax=Math.max(...arr);
     
      //remove firstmax from the arry
        for( let i = 0; i < arr.length; i++){ 
        
            if ( arr[i] === firstMax) { 
        
                arr.splice(i, 1); 
            }
        
        }
     
      return Math.max(...arr);
}
module.exports = secondLargest