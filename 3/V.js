let A = Number(prompt())
let B = Number(prompt())
let C = Number(prompt())
let D = Number(prompt())
let E = Number(prompt())
if ((A <= D) & (B <= E)){
    console.log('YES')}
else if ((A <= E) & (B <= D)){
    console.log('YES')}
else if ((C <= D) & (B <= E)){
    console.log('YES')}
else if ((C <= E) & (B <= D)){
    console.log('YES')}
else if ((A <= D) & (C <= E)){
    console.log('YES')}
else if ((A <= E) & (C <= D)){
    console.log('YES')}
else{
    console.log('NO')}