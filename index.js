function getSquaredElementsAtProperty(obj, key) {
  // your code here
  /* START SOLUTION */
  var arr = obj[key]
  if(!obj[key]){
    return [];
  }
  
  if(arr.length===0){
      return []
  }
  if(!Array.isArray(obj[key])){
      return []
  } 

  let result=  arr.map(function(curValue){
       acc= curValue * curValue 
       return acc
    })
    return result
  /* END SOLUTION */
}

var obj = {
  key: [2, 1, 5]
};
var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]