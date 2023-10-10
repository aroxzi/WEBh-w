function Concat(a, b){
    let s = ""
    for (let i = 0; i < a; i++){
        s += b
    }
    return s
}
let n = Number(prompt())
let p1 = '   _~_    '
let p2 = '  (o o)   '
let p3 = ' /  V  \\  '
let p4 = '/(  _  )\\ '
let p5 = '  ^^ ^^   '
console.log(Concat(n, p1))
console.log(Concat(n, p2))
console.log(Concat(n, p3))
console.log(Concat(n, p4))
console.log(Concat(n, p5))