function write(log) {
    console.log(log)
}

let pies = {
    imie: 'Reksio',
    waga: 5,
    kolor: 'czarny',
    rasa: 'jamnik',
    wiek: 4,
    szczepiony: true,

    szczekaj() {
        console.log('czemu kurwa nie zrobiliscie backupow czwarty rok ti');
    }
}

pies.waga = 6; // utyl sie
pies['wiek'] = 'dwa';

write(pies);

write("");

write(pies.imie);
write(pies.waga);

pies.szczekaj();

// Zad. 3.4 s.74

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
