const randomValue = Math.floor(Math.random() * 6);

const userQuestion = prompt("Zadaj pytanie, na które chcesz uzyskać odpowiedź:");

let answer;
switch (randomValue) {
    case 0:
        answer = "Tak, na pewno!";
        break;
    case 1:
        answer = "Nie, zdecydowanie nie.";
        break;
    case 2:
        answer = "Może, kto wie?";
        break;
    case 3:
        answer = "Nie jestem pewien, spróbuj ponownie.";
        break;
    case 4:
        answer = "Zdecydowanie tak!";
        break;
    case 5:
        answer = "To nie jest dobry pomysł.";
        break;
    default:
        answer = "Nie mam odpowiedzi na to pytanie.";
}

console.log(`Pytanie: ${userQuestion}`);
console.log(`Odpowiedź: ${answer}`);