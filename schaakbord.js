
// Definieert de kleuren voor de schaakbordvelden
const BLACK_SQUARE = 'black';  // Zwarte velden
const WHITE_SQUARE = 'white';  // Witte velden

// Verkrijgt elementen uit de DOM
const colsInput = document.getElementById("colsInput");
const rowsInput = document.getElementById("rowInput");
const schaakbord = document.getElementById("schaakbord");
const Btn = document.getElementById("Btn");

Btn.addEventListener("click", function() {
    const rowsAantal = parseInt(rowsInput.value);
    const colsAantal = parseInt(colsInput.value);
    
    // Controleert de geldigheid van de invoer
    if (isNaN(rowsAantal) || rowsAantal < 2 || isNaN(colsAantal) || colsAantal < 2) {
        alert("De afmetingen van het bord moeten minimaal 2 bij 2 zijn.");
        return;
    }

    // Stelt het aantal kolommen in voor het grid
    schaakbord.style.gridTemplateColumns = `repeat(${colsAantal}, 50px)`;
    
    // Leegt het schaakbord voordat een nieuwe wordt gegenereerd
    schaakbord.innerHTML = '';

    // Genereert het schaakbord
    for (let row = 0; row < rowsAantal; row++) {
        for (let col = 0; col < colsAantal; col++) {
            // Creëert een nieuw vierkant (div)
            let square = document.createElement('div');
            square.classList.add('square');  // Voegt een algemene klasse toe aan het vierkant

            // Bepaalt of het vierkant zwart of wit moet zijn, afhankelijk van de rij en kolom
            if ((row + col) % 2 === 0) {
                square.classList.add(BLACK_SQUARE);  // Voegt de zwarte klasse toe
            } else {
                square.classList.add(WHITE_SQUARE);  // Voegt de witte klasse toe
            }

            // Voegt het vierkant toe aan het schaakbord
            schaakbord.appendChild(square);
        }
    }
});

