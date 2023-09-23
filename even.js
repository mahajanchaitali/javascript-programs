/*var arr = [1,21,3,43,22,69,7,9];
var even = arr.filter(number =>{
    return number %2 ===0;
});
console.log(even);*/
let arr =[1,21,3,43,22,69,9,2,88];
let even = [];
for(let i=0;i<arr.length;i++){
    if(arr[i]%2!==0){
     //ss   even.push(arr[i]);
    }
}
 for(let number of arr){
     if(number%2===1){
         even.push(number);
     }
}

console.log(even);


























