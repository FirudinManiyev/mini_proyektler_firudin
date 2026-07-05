// ===========================
// ELEMENTLƏR
// ===========================

const cups = [...document.querySelectorAll(".cup")];
const coin = document.getElementById("coin");

const message = document.getElementById("message");
const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");


// ===========================
// OYUN DƏYİŞƏNLƏRİ
// ===========================

let coinCup = 0; // Coin-in olduğu stəkanın index-i (0, 1, və ya 2)
let canChoose = false;
let isShuffling = false;


// Hər stəkanın cari mövqeyi
// 0 = sol
// 1 = orta
// 2 = sağ

let positions = [0, 1, 2];


// Desktop koordinatları

const desktopX = [40, 285, 530];

// Tablet koordinatları (768px)

const tabletX = [0, 115, 230];

// Mobil koordinatları (480px)

const mobileX = [0, 100, 200];

// Kiçik mobil koordinatları (360px)

const smallMobileX = [0, 85, 170];


// ===========================
// KOORDİNAT
// ===========================

function getCoords() {

    if (window.innerWidth <= 360) {

        return smallMobileX;

    }

    if (window.innerWidth <= 480) {

        return mobileX;

    }

    if (window.innerWidth <= 768) {

        return tabletX;

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

    // Coin-i də hərəkət etdir
    moveCoinToCup(coinCup);

}


// Coin-i stəkanın altına yerləşdir

function moveCoinToCup(cupIndex) {

    // Coin həmişə eyni stəkanın altında qalır
    // Stəkanın cari mövqeyini tap
    const cupPosition = positions[cupIndex];

    const coords = getCoords();

    let cupWidth = 130; // Desktop

    if (window.innerWidth <= 768) cupWidth = 85;
    if (window.innerWidth <= 480) cupWidth = 70;
    if (window.innerWidth <= 360) cupWidth = 60;

    const xPos = coords[cupPosition] + cupWidth / 2; // Stəkanın mərkəzi

    coin.style.left = xPos + "px";

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
        "Coin hansı stəkanın altındadır? \"Qarışdır\" düyməsini bas.";

    positions = [0, 1, 2];

    renderPositions();

    coinCup = Math.floor(Math.random() * 3);

    cups.forEach(cup => {

        cup.classList.remove("correct");
        cup.classList.remove("wrong");
        cup.classList.remove("selected");
        cup.classList.add("lifted");

    });

    coin.classList.remove("hidden");

    moveCoinToCup(coinCup);

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
        cup.classList.remove("selected");
    });

    // Coin gizlət
    coin.classList.add("hidden");

    // Stəkanları aşağı sal
    cups.forEach(cup => cup.classList.remove("lifted"));
    cups.forEach(cup => cup.classList.add("lowered"));

    await sleep(600);

    // 10 dəfə qarışdır

    for (let i = 0; i < 10; i++) {

        const [a, b] = randomPair();

        cups[a].classList.add("moving");
        cups[b].classList.add("moving");

        swapPositions(a, b);

        renderPositions();

        await sleep(500);

        cups[a].classList.remove("moving");
        cups[b].classList.remove("moving");

        await sleep(50);

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

        cup.classList.add("selected");

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

        // Bütün stəkanları yuxarı qaldır
        cups.forEach(c => {
            c.classList.remove("lowered");
            c.classList.add("lifted");
        });

        // Coin-i göstər
        coin.classList.remove("hidden");
        moveCoinToCup(coinCup);

    });

});