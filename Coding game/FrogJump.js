function solution(X, Y, D) {
  if (X === Y) return 0;
  let jump = 0;
  while (X < Y) {
    X = X + D;
    jump++;
  }
  return jump;
}

console.log("how many the frog has jump", solution(10,85,30));
