let n = Number(prompt())
let x = Number(prompt())
let values = prompt()
const a = values.split(' ').map(Number);
let result = a[0];
for (let i = 0; i < n; i++) {
    result = result * x + a[i + 1];
}
console.log(result);