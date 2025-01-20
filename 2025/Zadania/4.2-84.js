const age = parseInt(prompt("Podaj swój wiek:"));

let message;

if (age >= 21) {
    message = "Możesz wejść do lokalu i kupić alkohol.";
} else if (age >= 19) {
    message = "Możesz wejść do lokalu, ale nie możesz kupić alkoholu.";
} else {
    message = "Nie możesz wejść do lokalu.";
}

console.log(message);