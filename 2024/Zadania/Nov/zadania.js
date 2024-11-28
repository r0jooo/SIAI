// 4.1/82

let bool = false;

console.log(bool);

if (bool) {
    console.log("true");
} else {
    console.log("false");
}

//////////////////////////////////////////

// 3.4/74

let myCar = {
    make: 'Volkswagen',
    model: 'Passat',
    edition: 'B5',
    year: 2003,
    color: 'black',
    isElectric: false
};

let color = 'blue';
myCar['color'] = color;

myCar['forSale'] = true;

console.log(`Marka samochodu: ${myCar.make}`);
console.log(`Model samochodu: ${myCar.model}`);

console.log(`Na sprzedaż: ${myCar['forSale']}`);

//////////////////////////////////////////

// 3.3/71

const array = [1, 2, 3];
const newArray = [array, array, array];
console.log(newArray[1][1]);