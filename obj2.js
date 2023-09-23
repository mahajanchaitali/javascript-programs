const yash ={
 firstname: "delisha",
 lastname:  "mahajan",
 id: 56785,
 age: 1,
  fullname: function(){
    return this.firstname + "  " + this.lastname  + "  "+ this.age +"  " + this.id;
 }
};
console.log(yash.fullname());
