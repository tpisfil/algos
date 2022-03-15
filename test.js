// function calc(arr, msg) {
//     arr[1] = 150;
//     msg = "inside";
//     console.log(arr[0] + arr[1]);
//     console.log(msg);
// }

// const arr = [100];
// let msg = "outside";

// calc(arr,msg);

// console.log("now we here");
// console.log(arr[0] + arr[1]);
// console.log(msg);


// // 2

// const x = {};
// x['foo'] = 'bar';
// x.bar = {
//     'first': 100,
//     'second': 200
// }

// console.log(x.bar['first'] + x['bar'].second);






// function sum() {
//     let answer =0;
//     arguments.forEach((element) => {
//         const e = parseInt(element);
//         if (!isNaN(e)) {
//             answer += e;
//         }
//     });
//     return answer;
// }

// sum();



// function foo(x,y) {
//     return x+y;
// }

// console.log(foo("!!") === "!!undefined");






// printNum(150);

// function printNum() {
//     console.log(num);
//     var num = 5;
// }







// const A = {
//     elem: 5
// };

// const B = {
//     elem: 10,
//     getElem(num) {
//         console.log(this.elem*num);
//         return this.elem * num;
//     }
// };

// const getElem = B.getElem;
// const boundGetElem = getElem.bind(B);

// which one returns 100? this one does 
// boundGetElem(10);











// function math(operation, x) {
//     const OPERATIONS = {
//         '*': (a, b) => a * b,
//         '/': (a, b) => a / b,
//         '+': (a, b) => a + b,
//         '-': (a, b) => a - b,
//     }

//     return function(y) {
//         return OPERATIONS[operation](x,y);
//     }
// }

// const mul = math("*", 5);
// const add = math("+", mul(2));

// console.log(typeof add);
// console.log(add(math("-", 25)(20)));













// function prefix(str) {
//     try {
//         return str.substring(0,3);
//     } catch (err) {
//         throw err;
//         return "catch";
//     }
// }

// try {
//     console.log(prefix(5));
// } catch (err) {
//     console.log("error");
// }














// function foo(a) {
//     let returnValue = "";

//     try {
//         if (a === "bar") {
//             throw new Error("qux");
//         }
//         returnValue = "try";
//     } catch (err) {
//         returnValue = "catch";
//     } finally {
//         returnValue = "finally";
//     }

//     return returnValue;
// }

// console.log(foo("bar"));
// console.log(foo("zzz"));

















// var arr = ["first", "second", "third", "fourth"];
// for (var i = 0; i<3; ++i) {
//     setTimeout(() => {
//         console.log(arr[i]);
//     }, 2500);
// }


















// function foo(bar) {
//     this.a = bar;
//     this.b = new Array(bar[0], bar[1], bar[2]);
// }

// const bar = [10,10,10];
// const zzz = new foo(bar);

// bar[0] = 100;
// bar[3] = 100;

// const qux = bar[0] + zzz.a[3] + zzz.b[0]; 
// console.log(qux);














// for (let i = 0; i<3; ++i) {
//     console.log(i);
// }












const prom = new Promise((resolve, reject) => {
    setTimeout( () => {
        resolve("prom");
    }, 1000);
    setTimeout( () => {
        reject(new Error("!prom"));
    }, 5000)
});

prom.then(function (arg) {
    console.log(arg);
    return new Promise((resolve, reject) => {
        reject(new Error("!arg"))
    }).catch ((err) => {
        console.log(err.message);
    });
}).catch((err) => {
    console.log(err.message);
});