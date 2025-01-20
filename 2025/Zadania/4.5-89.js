let prize = prompt("Wybierz wartość z przedziału od 0 do 10:");

prize = Number(prize);

let message = "Wybrana opcja to ";

switch (prize) {
    case 0:
        message += "0 - Brak nagrody.";
        break;
    case 1:
        message += "1 - Nagroda: Długopis.";
        break;
    case 2:
        message += "2 - Nagroda: Notatnik.";
        break;
    case 3:
        message += "3 - Nagroda: Kubek.";
        break;
    case 4:
        message += "4 - Nagroda: Koszulka.";
        break;
    case 5:
        message += "5 - Nagroda: Plecak.";
        break;
    case 6:
        message += "6 - Nagroda: Słuchawki.";
        break;
    case 7:
        message += "7 - Nagroda: Smartwatch.";
        break;
    case 8:
        message += "8 - Nagroda: Tablet.";
        break;
    case 9:
        message += "9 - Nagroda: Laptop.";
        break;
    case 10:
        message += "10 - Nagroda: Samochód.";
        break;
    default:
        message += "nieprawidłowa wartość.";
}

alert(message);