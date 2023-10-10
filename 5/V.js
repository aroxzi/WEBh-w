let a = Number(prompt())
let b = Number(prompt())
let c = Number(prompt())
let d = Number(prompt())
let e = Number(prompt())
let f = Number(prompt())

if (a === 0 && b === 0 && c === 0 && d === 0 && e === 0 && f === 0) {
  console.log(5);
} else if (a * d === b * c && a * f !== c * e) {
  console.log(0);
} else if (a === 0 && b === 0 && e !== 0) {
  console.log(0);
} else if (c === 0 && d === 0 && f !== 0) {
  console.log(0);
} else if (a === 0 && c === 0 && b * f !== d * e) {
  console.log(0);
} else if (b === 0 && d === 0 && a * f !== c * e) {
  console.log(0);
} else if (a * d === b * c && a * f === c * e) {
  if (b === 0 && d === 0) {
    if (a !== 0 && c !== 0) {
      console.log(3, e / a);
    } else if (a === 0) {
      if (e === 0) {
        console.log(3, f / c);
      }
    } else if (c === 0) {
      if (f === 0) {
        console.log(3, e / a);
      }
    }
  } else if (a === 0 && c === 0) {
    if (b !== 0) {
      console.log(4, e / b);
    } else if (d !== 0) {
      console.log(4, f / d);
    }
  } else if (b !== 0) {
    console.log(1, -a / b, e / b);
  } else if (d !== 0) {
    console.log(1, -c / d, f / d);
  }
} else {
  const x = (e * d - b * f) / (a * d - b * c);
  const y = (a * f - e * c) / (a * d - b * c);
  console.log(2, x, y);
}