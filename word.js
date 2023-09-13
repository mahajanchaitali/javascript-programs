let name = "yash mahajan harish";
// let name = "xayuz";
let len = name.length; // 5
let counter = 1;

for(let i=0;i<len;i++){
    if(name[i] == ' '){
      counter++; // counter = counter + 1; //1,2
    }
}

console.log(`Total Words : ${counter}`);
