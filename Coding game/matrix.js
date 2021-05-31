function solution(A) {
  let count = 0;
  let result = 0;
  for (let i = 0; i < A.length; i++) {
    let index = i + (A[i] - 1);
    if (A[index]) {
      let test = true;
      for (let j = i + 1; j <= index; j++) {
        if (A[i] > A[j]) {
          test = false;
          count -= 1;
          break;
        }
      }
      if (test) {
        count = A[i];
      }
    }
    if (count > result) {
      result = count;
    }
  }
  return result;
}

function solution(A) {
  let count = 0;
  let result = 0;
  for (let i = 0; i < A.length; i++) {
    let count = A[i];
    for (let j = i + 1; j <= A.length; j++) {
      if (A[i] > A[j]) {
        let mines = A[i] - A[j];
        count = count - mines;
      }
      if (A[i] < A[j]) {
        break;
      }
    }
    if (count > result) {
      result = count;
    }
  }
  return result;
}

function solution(A) {
  let count = 0;
  let result = 0;
  let min = A[i];
  for (let i = 1; i < A.length; i++) {
    if (A[i] < A[i-1]) {
      min = A[i];
    }
    else {
        count = A[i]
    }
    count = min
  }
  return result;
}
