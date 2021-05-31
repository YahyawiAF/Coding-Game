// const solution = (A) => {
//   let sum = A.length + 1;
//   let arraySum = 0;
//   let result = 0;
//   for (let i = 1; i <= A.length; i++) {
//     sum = sum + i;
//   }
//   for (let i = 0; i < A.length; i++) {
//     arraySum = arraySum + A[i];

//   }
//   result = sum - arraySum
//   return result;
// };

const solution = (A) => {
  A.sort((a, b) => a - b);
  console.log("sorted", A);
  let next = 1;
  let i = 0;
  while ((next === A[i])) {
    next++;
    i++;
  }
  return next;
};

console.log("haha the missing elem is::", solution([3, 2, 1, 5, 6, 4, 8]));
