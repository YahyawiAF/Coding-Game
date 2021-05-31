// const solution = (A) => {
//   A.sort((a, b) => a - b);
//   next = 1;
//   perm = true;
//   console.log("A", A);
//   for (let i = 0; i < A.length; i++) {
//     if (next !== A[i]) {
//       perm = false;
//       break;
//     }
//     next++;
//   }
//   return perm;
// };

// const solution = (A) => {
//   let perm = [];
//   let isPerm = true;
//   for (let i = 0; i < A.length; i++) {
//     perm[A[i]] = A[i];
//   }
//   for (let i = 1; i <= A.length; i++) {
//     if (perm[i] !== i) {
//       isPerm = false;
//       break;
//     }
//   }
//   return isPerm;
// };

var x = 1;
var y = 1;

console.log("solution =", x + y);

// console.log("solution::", solution([1, 2, 6, 4, 3]));
