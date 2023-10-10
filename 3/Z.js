let k = Number(prompt())
let m = Number(prompt())
let n = Number(prompt())
let t = 0
if (n <= k){
  t = 2*m}
else if (n*2 % k == 0){
  t = m*Math.floor(n*2 / k)}
else{
  t = m*(1 + Math.floor(n*2 / k))}
console.log(t)