// ===========================
// ELEMENTLƏR
// ===========================

const cups = [...document.querySelectorAll(".cup")];
const coins = [...document.querySelectorAll(".coin")];

const message = document.getElementById("message");
const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");


// ===========================
// OYUN DƏYİŞƏNLƏRİ
// ===========================

let coinCup = 0;
let canChoose = false;
let isShuffling = false;


// Hər stəkanın cari mövqeyi
// 0 = sol
// 1 = orta
// 2 = sağ

let positions = [0, 1, 2];


// Desktop koordinatları

const desktopX = [40, 285, 530];


// Mobil koordinatları

const mobileX = [0, 115, 230];


// ===========================
// KOORDİNAT
// ===========================

function getCoords() {

    if (window.innerWidth <= 768) {

        return mobileX;

    }

    return desktopX;

}


// ===========================
// STƏKANLARI YERLƏŞDİR
// ===========================

function renderPositions() {

    const coords = getCoords();

    cups.forEach((cup, index) => {

        cup.style.transform =
            `translateX(${coords[positions[index]]}px)`;

    });

}


// İlk yerləşmə

renderPositions();


// Ekran dəyişəndə yenilə

window.addEventListener("resize", renderPositions);


// ===========================
// RESET
// ===========================

function resetGame() {

    canChoose = false;

    isShuffling = false;

    message.textContent =
        "Coin hansı stəkanın altındadır?";

    positions = [0, 1, 2];

    renderPositions();

    coinCup = Math.floor(Math.random() * 3);

    cups.forEach(cup => {

        cup.classList.remove("correct");
        cup.classList.remove("wrong");
        cup.classList.remove("shuffle");

    });

    coins.forEach(c => {

        c.classList.remove("show");

    });

}


// ===========================
// BUTTONLAR
// ===========================

restartBtn.addEventListener("click", resetGame);

startBtn.addEventListener("click", () => {

    if (isShuffling) return;

    startShuffle();

});


// İlk dəfə

resetGame();


// ===========================
// RANDOM
// ===========================

function randomPair() {

    const pairs = [

        [0, 1],
        [1, 2],
        [0, 2]

    ];

    return pairs[
        Math.floor(Math.random() * pairs.length)
    ];

}


// ===========================
// SWAP
// ===========================

function swapPositions(a, b) {

    const temp = positions[a];

    positions[a] = positions[b];

    positions[b] = temp;

}

// ===========================
// GÖZLƏ
// ===========================

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ===========================
// QARIŞDIRMA
// ===========================

async function startShuffle() {

    isShuffling = true;
    canChoose = false;

    message.textContent = "Qarışdırılır...";

    cups.forEach(cup => {
        cup.classList.remove("correct");
        cup.classList.remove("wrong");
    });

    coins.forEach(c => c.classList.remove("show"));

    // 12 dəfə qarışdır

    for (let i = 0; i < 12; i++) {

        const [a, b] = randomPair();

        cups[a].classList.add("shuffle");
        cups[b].classList.add("shuffle");

        swapPositions(a, b);

        renderPositions();

        await sleep(650);

        cups[a].classList.remove("shuffle");
        cups[b].classList.remove("shuffle");

        await sleep(60);

    }

    isShuffling = false;
    canChoose = true;

    message.textContent =
        "İndi coin olan stəkanı seç.";

}

// ===========================
// KLİK
// ===========================

cups.forEach((cup, index) => {

    cup.addEventListener("click", () => {

        if (!canChoose) return;

        canChoose = false;

        coins[coinCup].classList.add("show");

        if (index === coinCup) {

            cup.classList.add("correct");

            message.textContent =
                "🎉 Təbriklər! Düz tapdın.";

        } else {

            cup.classList.add("wrong");

            cups[coinCup].classList.add("correct");

            message.textContent =
                "❌ Təəssüf. Coin başqa stəkanın altında idi.";

        }

    });

});

// ===========================
// DEBUG (istəsən sil)
// ===========================

// console.log("Coin:",coinCup);