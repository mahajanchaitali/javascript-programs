let s ="";
let m = "";
for(i=1;i<=5;i++){
    for(j=5;j>=i;j--){
        s += "-";
    }
    for(k=1;k<=i;k++){
        s += "*"
    }
    for(l=2;l<=i;l++){
        m += "*";
    }
    console.log(s+""+m);
      s = "";
      m = "";
}
 