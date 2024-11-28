function primeNum(num){
let count=0;
for(let i=2;i<num;i++){
    if(num%i==0){
    count++
    // return i
    }}
    if(count==0){
        return true;
    }

    else {
        return false;
    }

}
// console.log(primeNum(29));
function evenOdd(num){
    let count=0;
for(let i=1;i<=num;i++){
    if(num%2==0){
        count++;
    }
}
if(count>0){
    return true
}
else {
    return false
}
}
console.log(evenOdd(13))