const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  // console.log(`First Name : ${person.firstName} Age : ${person.age}`)
  console.log(person.eyeColor);
  
  const user = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName + " " + this.id;
    }
  };
  // console.log(`Firt Name : ${user.firstName}`)


  // let name = user.fullName();
  // // console.log(name)
  console.log(`Full Name : ${user.fullName()}`)
  