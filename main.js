// let a = ['Muhammadaziz', 'Fozil', 'Azim','Bosit'];
// let b = confirm(a);

// if (b === true) {
//     a.shift('Bosit');
//     console.log(a);
// } else {
//     console.log(a);
// }

// let a = ['olma', 'uzum', 'nok'];
// let b = a.toString();
// let res = b.toUpperCase();
// console.log(res);

// let a = ['olma', 'uzum', 'nok'];

// for (i = 0; i = a.length; i++) {
//     a[i] = a[i].toUpperCase();
// }
// console.log(a);

let arr = [2, 4, 9, 10, 45, 67, 8, 90];
let arr2 = [];

for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        arr2.push(arr[i]);
    }
}

console.log(arr2);