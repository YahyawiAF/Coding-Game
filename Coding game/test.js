function solution(N) {
  let gab = -1;
  let result = 0;

  while (N > 0) {
    let binary = N % 2;
    if (binary == 1) {
      if (gab > result) {
        result = gab;
      }
      gab = 0;
    } else if(gab >= 0) {
      gab += 1;
    }

    N = parseInt(N / 2);
  }
  return result;
}

console.log("test", solution(32));
