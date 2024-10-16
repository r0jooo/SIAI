// Zad. 3.2 s. 70

zakupy = new Array();

zakupy.push("Mleko", "Pieczywo", "Jabłka"); // Dodaj artykuły do listy
zakupy.splice(1, 1, "Banan", "Jajka"); // Zamień pieczywo na Banan i Jajka
zakupy.pop(-1); // Usuń ostatni element z listy
console.log(zakupy);
zakupy.sort(); // Posortuj elementy alfabetycznie
zakupy.indexOf("Mleko"); // Znajdź index elementu Mleko
zakupy.splice(1, 0, "Marchew", "Sałata"); // Dodaj Marchew i Sałatę po Bananie

zakupy2 = new Array("Sok", "Pop"); // Utwórz drugą listę z podanymi elementami

zakupy = zakupy.concat(zakupy2, zakupy2); // Połącz listę zakupy z zakupy2 dwa razy

console.log(zakupy.lastIndexOf("Pop")); // Indeks ostatniego wystąpienia elementu Pop



