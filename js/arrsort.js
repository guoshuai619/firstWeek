var arr = [1,5,2,7,3,5,9,3,5];
var brr = [];
for(var i=0;i<arr.length;i++){
    if(brr.indexOf(arr[i])==-1){
        brr.push(arr[i])
    }
}
console.log(brr);