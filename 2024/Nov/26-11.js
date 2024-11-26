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
