let n = Number(prompt())
let a = Number(prompt())
let s = 0
for (let i = n; i >= 1; i-=1){
    s += i * a
    s = s ** 0.5}
console.log(s)