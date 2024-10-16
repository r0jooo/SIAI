arr = new Array(1, 2, 3, 4, 5, 6, 7, 8);

arr.pop();

arr.shift();
console.log(arr);

arr.splice(1, 3);
console.log(arr);

delete arr[0];

arr2 = new Array(2, 3, 4, 5, 6, 7, 8, 6)

let findValue = arr2.find(function(e) {return e === 6 });
let findValue2 = arr2.find(e => e === 10);

console.log(findValue, findValue2);

let findValue3 = arr2.indexOf(6, 4); // Jeśli elementu nie ma w tablicy to domyślnie będzie -1

console.log(findValue3);