function isIsogram(str){
   let strSplit= str.split("");
    return strSplit.every((current, index)=>  { return str.indexOf(current) == index}); 
  
 
}

//let array =["o","p","e","y","m","i"];
// let str ="opeee" ;
// let array = str.split("");

// let everyElement = array.every((current, index)=> {return array.indexOf(current) == index;})

//  console.log(everyElement);
//  console.log(array);

console.log(isIsogram("aje"));


 //console.log(isIsogram("abhhhhhhcd"));

