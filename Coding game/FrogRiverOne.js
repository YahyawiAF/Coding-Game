function solution(X, A) {
    // write your code in JavaScript (Node.js 4.0.0)
    
    var leaves = [];
    var i = 0;
    var result = -1;
    
    for(i=0; i<A.length; i++) {
        if(typeof leaves[A[i]] == 'undefined') {
            leaves[A[i]] = i;
        }
    }
    
    if(leaves.length <= X) {
        return -1;
    }
    
    for(i=1; i<=X; i++) {
        if(typeof leaves[i] == 'undefined') {
            return -1;
        } else {
            result = Math.max(result, leaves[i]);
        }
    }
    
    return result;
}

console.log("solution:", solution([1,1,1, 3, 5, 2, 4, 7,6], 5));
