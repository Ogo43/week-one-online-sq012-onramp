function filterArray(arr) {
 //i move go through the arry
 let result=[]
 for( let i = 0; i < arr.length; i++){ 
  
   //how to know if it is a nan and not string with number
   if (typeof arr[i] != 'string') {
  result.push(arr[i])  
}
  
  }

return result
}

module.exports = filterArray