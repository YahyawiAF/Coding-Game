const solution = (A) => {
  A.sort((a, b) => a - b);
  //   A = [...new Set(A)];
  let res = [];
  min = 1;
  for (let i = 0; i < A.length; i++) {
    if (min < A[i]) {
      res.push(min);
    }
    // if (next !== A[i]) {
    //   min.push(next);
    // }
    // next++;
    min++;
  }
  console.log(res);
  return res[0] || min;
};

console.log("solution", solution([1, 1, 3, 5]));
