const countdownEl = document.getElementById('countdown');
const surpriseEl = document.getElementById('surprise');
const music = document.getElementById('music');

const target = new Date();
target.setMinutes(target.getMinutes() + 1); // 1 dakika sonra

function update() {
    const now = new Date();
    const diff = target - now;

    if (diff <= 0) {
        clearInterval(timer);
        countdownEl.textContent = '00:00';
        surpriseEl.classList.remove('hidden');
        surpriseEl.classList.add('fade-in');
        music.play();
    } else {
        const minutes = String(Math.floor(diff / 1000 / 60)).padStart(2, '0');
        const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');
        countdownEl.textContent = `${minutes}:${seconds}`;
    }
}

const timer = setInterval(update, 1000);
update();
