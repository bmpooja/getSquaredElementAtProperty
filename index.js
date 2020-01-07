function getOddElementsAtProperty(obj, key) {
  // your code here
  /* START SOLUTION */
  var arr = obj[key]
  var newArray=[]
  if(!obj[key]){
      return []
  }
  if(arr.length=== 0){
      return []
  }
  if(!Array.isArray(obj[key])){
      return []
  }
  let result = arr.map(element =>{
      if( element % 2 !== 0)
      return newArray.push(element)
  })
return newArray
  /* END SOLUTION */
}
var obj = {
  key: [1, 2, 3, 4, 5]
};
var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]