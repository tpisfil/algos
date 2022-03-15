function sortedSquaredArray(array) {
    let newArr = []
    let start = 0;
    let end = array.length-1;

    while (start!=end){
        if (Math.abs(array[start]) > Math.abs(array[end])){
            newArr.unshift(array[start] * array[start]);
            start ++;
        } else {
            newArr.unshift(array[end] * array[end]);
            end --;
        }
    } newArr.unshift(array[start] * array[start]);

    return newArr;
}

array = [-5, -4, -3, -2, -1];

console.log(sortedSquaredArray(array));