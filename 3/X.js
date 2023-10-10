let A1 = Number(prompt())
let B1 = Number(prompt())
let C1 = Number(prompt())
let A2 = Number(prompt())
let B2 = Number(prompt())
let C2 = Number(prompt())
let nb1 = Math.floor(A1 / A2) * Math.floor(B1 / B2) * Math.floor(C1 / C2)
let nb2 = Math.floor(A1 / A2) * Math.floor(B1 / C2) * Math.floor(C1 / B2)
let nb3 = Math.floor(A1 / B2) * Math.floor(B1 / A2) * Math.floor(C1 / C2)
let nb4 = Math.floor(A1 / B2) * Math.floor(B1 / C2) * Math.floor(C1 / A2)
let nb5 = Math.floor(A1 / C2) * Math.floor(B1 / A2) * Math.floor(C1 / B2)
let nb6 = Math.floor(A1 / C2) * Math.floor(B1 / B2) * Math.floor(C1 / A2)
if (A1 * B1 * C1 >= A2 * B2 * C2 & nb1 >= nb2 & nb1 >= nb3 & nb1 >= nb4 & nb1 >= nb5 & nb1 >= nb6){
    console.log(nb1)}
else if (A1 * B1 * C1 >= A2 * B2 * C2 & nb2 >= nb1 & nb2 >= nb3 & nb2 >= nb4 & nb2 >= nb5 & nb2 >= nb6){
    console.log(nb2)}
else if (A1 * B1 * C1 >= A2 * B2 * C2 & nb3 >= nb1 & nb3 >= nb2 & nb3 >= nb4 & nb3 >= nb5 & nb3 >= nb6){
    console.log(nb3)}
else if (A1 * B1 * C1 >= A2 * B2 * C2 & nb4 >= nb1 & nb4 >= nb3 & nb4 >= nb2 & nb4 >= nb5 & nb4 >= nb6){
    console.log(nb4)}
else if (A1 * B1 * C1 >= A2 * B2 * C2 & nb5 >= nb1 & nb5 >= nb3 & nb5 >= nb4 & nb5 >= nb2 & nb5 >= nb6){
    console.log(nb5)}
else if (A1 * B1 * C1 >= A2 * B2 * C2 & nb6 >= nb1 & nb6 >= nb3 & nb6 >= nb4 & nb6 >= nb5 & nb6 >= nb2){
    console.log(nb6)}
else{
    console.log(0)}