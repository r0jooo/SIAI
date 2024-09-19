// 3.1 s.65

zakupy = new Array("Mleko", "Pieczywo", "Jabłka")

console.log("Długość listy zakupowej: " + zakupy.length + "\n")
        
zakupy[1] = "Banan"
        
zakupy.forEach(element => {
    console.log(element + " ");
});