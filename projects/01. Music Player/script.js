const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");

const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progressContainer");

const current = document.getElementById("current");
const duration = document.getElementById("duration");

const volume = document.getElementById("volume");

const record = document.getElementById("record");
const tonearm = document.getElementById("tonearm");

let isPlaying = false;

// ================= PLAY / PAUSE =================

playBtn.addEventListener("click", () => {

    if (isPlaying) {

        audio.pause();

    } else {

        audio.play();

    }

});

audio.addEventListener("play", () => {

    isPlaying = true;

    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';

    record.classList.add("playing");

    tonearm.classList.add("active");

});

audio.addEventListener("pause", () => {

    isPlaying = false;

    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';

    record.classList.remove("playing");

    tonearm.classList.remove("active");

});

// ================= DURATION =================

audio.addEventListener("loadedmetadata", () => {

    duration.textContent = formatTime(audio.duration);

});

// ================= UPDATE =================

audio.addEventListener("timeupdate", () => {

    const percent = (audio.currentTime / audio.duration) * 100;

    progress.style.width = percent + "%";

    current.textContent = formatTime(audio.currentTime);

});

// ================= SEEK =================

progressContainer.addEventListener("click", (e) => {

    const width = progressContainer.clientWidth;

    const clickX = e.offsetX;

    audio.currentTime = (clickX / width) * audio.duration;

});

// ================= VOLUME =================

volume.addEventListener("input", () => {

    audio.volume = volume.value;

});

// ================= END =================

audio.addEventListener("ended", () => {

    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';

    record.classList.remove("playing");

    tonearm.classList.remove("active");

    progress.style.width = "0%";

    current.textContent = "0:00";

    audio.currentTime = 0;

    isPlaying = false;

});

// ================= FORMAT =================

function formatTime(time) {

    if (isNaN(time)) return "0:00";

    const minutes = Math.floor(time / 60);

    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

}