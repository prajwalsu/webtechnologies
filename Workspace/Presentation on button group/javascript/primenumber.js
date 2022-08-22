// WAP for prime number
let primeNumber = (num) => {
  let s = 0;
  for (let i = 1; i < num / 2; i++) {
    if (num % i === 0) {
      s = s + 1;
    }
  }
  if (s === 1) {
    console.log("prime");
  } else {
    console.log("not prime");
  }
};