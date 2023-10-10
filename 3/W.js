let A1 = Number(prompt())
let B1 = Number(prompt())
let C1 = Number(prompt())
let A2 = Number(prompt())
let B2 = Number(prompt())
let C2 = Number(prompt())
if ((A1 == A2 & B1 == B2 & C1 == C2) |
    (A1 == A2 & B1 == C2 & C1 == B2) |
    (A1 == C2 & B1 == A2 & C1 == B2) |
    (A1 == B2 & B1 == A2 & C1 == C2) |
    (A1 == B2 & B1 == C2 & C1 == A2) |
    (A1 == C2 & B1 == B2 & C1 == A2)){
    console.log('Boxes are equal')}
else if ((A1 <= A2 & B1 <= B2 & C1 <= C2) |
    (A1 <= A2 & B1 <= C2 & C1 <= B2) |
    (A1 <= C2 & B1 <= A2 & C1 <= B2) |
    (A1 <= B2 & B1 <= A2 & C1 <= C2) |
    (A1 <= B2 & B1 <= C2 & C1 <= A2) |
    (A1 <= C2 & B1 <= B2 & C1 <= A2)){
    console.log('The first box is smaller than the second one')}
else if ((A1 >= A2 & B1 >= B2 & C1 >= C2) |
    (A1 >= A2 & B1 >= C2 & C1 >= B2) |
    (A1 >= C2 & B1 >= A2 & C1 >= B2) |
    (A1 >= B2 & B1 >= A2 & C1 >= C2) |
    (A1 >= B2 & B1 >= C2 & C1 >= A2) |
    (A1 >= C2 & B1 >= B2 & C1 >= A2)){
    console.log('The first box is larger than the second one')}
else{
    console.log('Boxes are incomparable')}