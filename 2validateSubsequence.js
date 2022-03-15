function isValidSubsequence(array, seq) {
    // Write your code here.
    // for (let i=0; i<sequence.length; i++){
    //     if (array.includes(sequence[i])){
    //         console.log("next");
    //         var idx = array.indexOf(sequence[i]);
    //         array.splice(idx,1);
    //     } else {
    //         return false; 
    //     }
    // }
    // return true;

    let j = 0;
    for (let i=0; i<array.length; i++){
        if (array[i] == seq[j]){
            console.log("hello " + array[i]);
            j += 1;
        } 
    }
    return j == seq.length;

}

// array = [5,1,22,25,6,-1,8,10];
// seq = [1,6,-1,10];

array= [5, 1, 22, 25, 6, -1, 8, 10],
seq= [5, 1, 22, 22, 25, 6, -1, 8, 10]

console.log(isValidSubsequence(array, seq));