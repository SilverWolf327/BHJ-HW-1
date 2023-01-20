const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

let deadValue = 0;
let lostValue = 0;

function countersReset (alertValue) {
  
    deadValue = 0;
    dead.textContent = deadValue;
    lostValue = 0; 
    lost.textContent = lostValue;
    alert(alertValue);
};

function toggleDone (event) {
    elem = event.target;
    
    if (elem.classList.contains("hole_has-mole")) {
        deadValue++;
        dead.textContent = deadValue;
        if (deadValue === 3) {
            countersReset('Победа!');
        };
    }
    else {
        lostValue++;
        lost.textContent = lostValue;
        if (lostValue === 10) {
            countersReset('Вы проиграли!');
        };
    };
};

  const holeGame = document.querySelector('.hole-game');
  holeGame.addEventListener('click', toggleDone)
