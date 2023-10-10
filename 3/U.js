let n = Number(prompt());
let m = Math.floor(n / 60);
n = n % 60;
if (n < 5) {
    console.log(n, 0, 0, 0, m);
  } else if (5 <= n <= 8) {
    console.log(n - 5, 1, 0, 0, m);
  } else if (9 <= n <= 10) {
    console.log(0, 0, 1, 0, m);
  } else if (11 <= n <= 14) {
    console.log(n - 10, 0, 1, 0, m);
  } else if (15 <= n <= 17) {
    console.log(n - 15, 1, 1, 0, m);
  } else if (18 <= n <= 20) {
    console.log(0, 0, 0, 1, m);
  } else if (21 <= n <= 24) {
    console.log(n - 20, 0, 0, 1, m);
  } else if (25 <= n <= 28) {
    console.log(n - 25, 1, 0, 1, m);
  } else if (29 <= n <= 30) {
    console.log(0, 0, 1, 1, m);
  } else if (31 <= n <= 34) {
    console.log(n - 30, 0, 1, 1, m);
  } else if (n === 35) {
    console.log(0, 1, 1, 1, m);
  } else if (36 <= n <= 60) {
    console.log(0, 0, 0, 0, m + 1);
}