const cups = [...document.querySelectorAll(".cup")];
const coins = [...document.querySelectorAll(".coin")];

const message = document.getElementById("message");

const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");

let coinIndex = 0;
let canChoose = false;

// Başlanğıc
resetGame();

startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", resetGame);

function resetGame() {

    canChoose = false;

    message.textContent =
        "Coin hansı stəkanın altındadır? Qarışdırıldıqdan sonra tap.";

    coins.forEach(c => c.classList.remove("show"));

    cups.forEach((cup, index) => {

        cup.classList.remove("correct");
        cup.classList.remove("wrong");

        cup.style.order = index;

    });

}

function startGame() {

    canChoose = false;

    coins.forEach(c => c.classList.remove("show"));

    cups.forEach(c => {

        c.classList.remove("correct");
        c.classList.remove("wrong");

    });

    message.textContent = "Qarışdırılır...";

    coinIndex = Math.floor(Math.random() * 3);

    shuffleAnimation();

}

function shuffleAnimation() {

    let count = 0;

    const interval = setInterval(() => {

        const orders = [0, 1, 2];

        orders.sort(() => Math.random() - 0.5);

        cups.forEach((cup, i) => {

            cup.style.order = orders[i];

        });

        count++;

        if (count >= 12) {

            clearInterval(interval);

            message.textContent =
                "İndi bir stəkanı seç.";

            canChoose = true;

        }

    }, 300);

}

cups.forEach(cup => {

    cup.addEventListener("click", () => {

        if (!canChoose) return;

        canChoose = false;

        const clickedIndex = Number(cup.dataset.index);

        coins[coinIndex].classList.add("show");

        if (clickedIndex === coinIndex) {

            cup.classList.add("correct");

            message.textContent = "🎉 Təbriklər! Coini tapdın.";

        } else {

            cup.classList.add("wrong");

            cups[coinIndex].classList.add("correct");

            message.textContent = "❌ Təəssüf! Coin başqa stəkanın altında idi.";

        }

    });

});