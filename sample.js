 var obj1 = {name:"Person1", age:5 };
 var obj2 = {age:5, name:"Person1"};
 
// Using JavaScript
//JSON.stringify(obj1) === JSON.stringify(obj2); // true

for(var value in obj1,obj2){
console.log(value,obj1[value],obj2[value]);
}
