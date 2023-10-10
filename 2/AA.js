let x1 = Number(prompt());
let y1 = Number(prompt());
let a1 = Number(prompt());
let b1 = Number(prompt());
let x2 = Number(prompt());
let y2 = Number(prompt());

let t1 = x1 * 60 + y1
let t2 = a1 * 60 + b1
let t0 = 2 * t1 - t2
let t3 = x2 * 60 + y2
let t = t3 * 2 - t0
let b2 = t % 60
let a2 = (t / 60) % 24

console.log(a2, b2)