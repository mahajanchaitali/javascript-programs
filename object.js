 //method 1
 const person ={
    firstname:"chaitali",
    lastname :  "mahajan",
    id :   456738,
    age: 26 
};
//console.log(person.firstname);
console.log(`firstname:${person.firstname} \nlastname:${person.lastname} id:${person.id} age:${person.age}`);
//method 2
const user ={
    firstname: "harish",
    lastname:  "mahajan",
    id: 45678,
    age:32,
   fullName : function(){

    return this.age + "  " + this.id;
  }
};
let name = user.fullName();

console.log(user.fullName());
// console.log(name);
