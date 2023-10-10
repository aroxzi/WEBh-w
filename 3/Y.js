let n = Number(prompt())
let k = Number(prompt())
let x = 0
if (n == 2){
    x = 0}
else if (k <= Math.floor(n/2)){
    x = n - 3 - (k-1)}
else if (k > Math.floor(n/2)){
    x = n - 3 - (n-k)}
console.log(x)