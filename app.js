// Logic for August 1st Birthday
const targetDate = new Date('2026-08-01');
const today = new Date();
const diffTime = targetDate - today;
const daysLeft = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

// Update UI with your existing file
document.getElementById('daily-photo').src = 'images/kev.jpeg';
document.getElementById('countdown-days').innerText = `${daysLeft} Days Until Your 30th! 🎂`;

// Pop-up Photo using image_709084.png
function triggerPhotoPop() {
    const img = document.createElement('img');
    // Ensure image_709084.png is also moved into your images folder
    img.src = 'images/image_709084.png'; 
    img.className = 'pop-up-photo';
    document.body.appendChild(img);
    setTimeout(() => img.remove(), 3000);
}
setInterval(triggerPhotoPop, 15000);

// Scratch Canvas Logic
const canvas = document.getElementById('scratch-canvas');
const ctx = canvas.getContext('2d');
canvas.width = 400; canvas.height = 500;
ctx.fillStyle = '#d6d3d1'; 
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = '#451a03'; ctx.font = 'bold 30px Georgia';
ctx.textAlign = 'center';
ctx.fillText('Scratch to Reveal', 200, 250);
ctx.font = '16px Georgia';
ctx.fillText('Your daily memory awaits...', 200, 290);

canvas.addEventListener('mousemove', (e) => {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath(); ctx.arc(e.offsetX, e.offsetY, 30, 0, Math.PI * 2); ctx.fill();
});