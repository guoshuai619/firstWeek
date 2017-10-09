var crr = [1,5,2,7,3,5,9,3,5];
for(var i=0;i<crr.length;i++){
    for(var j=1;j<i;j++){
        if(crr[i]==crr[j]){
            crr.splice(i,1);
            i--;
        }
    }
}
console.log(crr);