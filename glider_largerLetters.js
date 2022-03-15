function largerLetters(num, string){
    const arr = []; 
    for (let i=0; i<string.length-1; i++){
        for (let j=i+1; j<string.length; j++){
            if (string[i].localeCompare(string[j])){
                console.log("i: " + string[i] + " wins")
            }
        }
    }
}

num = 5;
string = 'abc';
largerLetters(num, string);