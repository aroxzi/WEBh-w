let n = Number(prompt())
let sum = 0
for (let i = 1; i < n + 1; i++){
    sum += i}
for (let _ = 0; _ < n - 1; _++){
    sum -= Number(prompt())}
console.log(sum)