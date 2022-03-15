// function twoNumberSum(array, targetSum) {

//     var newArray = [];

//     for (let i=0; i<array.length; i++){
//         for (let j=i+1; j<array.length; j++){
//             if (array[i] + array[j] == targetSum){
//                 newArray.push(array[i]);
//                 newArray.push(array[j]);

//                 return newArray;
//             }
//         }
//     }
//     return newArray;
// }



function twoNumberSum(array, targetSum){
    const hashTable = {};

    for (let i=0; i<array.length; i++){
        potential = targetSum - array[i];
        if (potential in hashTable){
            return [potential, array[i]];
        } else {
            hashTable[array[i]] = true; 
        }
    }
    return [];
}

array = [3,5,-4,8,11,1,-1,6];
// array = [4, 6, 1];
targetSum = 10;
console.log(twoNumberSum(array, targetSum));
