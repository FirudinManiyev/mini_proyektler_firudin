const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");
const result = document.getElementById("result");

const options = [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800"
];

const segmentAngle = 360 / options.length;

let currentRotation = 0;
let spinning = false;

// Sektor yazılarını yarat
options.forEach((text, index) => {

    const label = document.createElement("div");

    label.className = "segment";

    const angle = index * segmentAngle + segmentAngle / 2;

    label.style.transform =
        `rotate(${angle}deg) translate(90px) rotate(90deg)`;

    label.textContent = text;

    wheel.appendChild(label);

});

// Fırlat

spinBtn.addEventListener("click", () => {

    if (spinning) return;

    spinning = true;

    result.textContent = "Fırlanır...";

    const winner = Math.floor(Math.random() * options.length);

    // Minimum 5 dövrə + qalib sektor
    const extraRotation = 360 * 5;

    const target =
        extraRotation +
        (360 - winner * segmentAngle);

    currentRotation += target;

    wheel.style.transform =
        `rotate(${currentRotation}deg)`;

    setTimeout(() => {

        result.innerHTML =
            `🎉 Nəticə: <strong>${options[winner]}</strong>`;

        spinning = false;

    }, 5000);

});