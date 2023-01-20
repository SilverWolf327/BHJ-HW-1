const elementTimer = document.getElementById("timer");

    let n = Number(elementTimer.innerText);
        console.log('n = ' + n);
   
        countdown = setInterval(() => {
            let currentTimer = (n - 1);
            timer.textContent = currentTimer;
            n--;
            if (n <= 0) {
            clearInterval(countdown);
            alert('Вы победили в конкурсе!');
            }
        }, 1000);
