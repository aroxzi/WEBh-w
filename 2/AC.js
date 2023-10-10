let N = Number(prompt())
let K = Number(prompt())
let M = Number(prompt())
let count = 0;
while (N >= K) {
    count += Math.floor(K / M);
    if (K - (K%M) > 0){
        N -= K - (K%M)
    }
}
console.log(count)