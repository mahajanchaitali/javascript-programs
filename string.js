let name = "xayuz";
let len = name.length; // 5
let counter = 0;

for(let i=0;i<len;i++){
    if(name[i] == 'a' || name[i] == 'e' || name[i] == 'i' || name[i] == 'o' || name[i] == 'u'){
      counter++; // counter = counter + 1; //1,2
    }
}

console.log(`Total Owels : ${counter}`);
 // a e i o u
//  0 x
//  1 a
//  2 y
//  3 u
//  4 z
