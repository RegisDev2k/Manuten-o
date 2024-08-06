// Temporizador de contagem regressiva
const countdownElement = document.getElementById('countdown');
const targetDate = new Date();
targetDate.setHours(targetDate.getHours() + 2); // 2 horas a partir de agora

function updateCountdown() {
    const now = new Date();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        countdownElement.textContent = '00:00:00';
        return;
    }

    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

setInterval(updateCountdown, 1000);
