// 1. Data: The 30 reasons
const dailyContent = [
    { day: 30, reason: "Because you have the most infectious laugh in the world." },
    { day: 29, reason: "For every time you've supported my wildest dreams." },
    { day: 28, reason: "Because you make even the hardest days feel easy." },
    { day: 27, reason: "Because your work ethic inspires me to be better." },
    { day: 26, reason: "For the way you always know how to calm me down." },
    { day: 25, reason: "Because you're not just my partner, you're my best friend." },
    { day: 24, reason: "For the adventures we’ve had and the ones we’re planning." },
    { day: 23, reason: "Because you make me feel safe in a chaotic world." },
    { day: 22, reason: "For your kindness toward everyone you meet." },
    { day: 21, reason: "Because you listen with your whole heart." },
    { day: 20, reason: "For the way you make our house feel like a home." },
    { day: 19, reason: "Because you are so incredibly intelligent." },
    { day: 18, reason: "For your unwavering loyalty." },
    { day: 17, reason: "Because your smile can change my entire mood." },
    { day: 16, reason: "For the sacrifices you make for our future." },
    { day: 15, reason: "Because you are the man I want to build a family with." },
    { day: 14, reason: "For the patience you show me every single day." },
    { day: 13, reason: "Because you challenge me to grow." },
    { day: 12, reason: "For your integrity in everything you do." },
    { day: 11, reason: "Because you believe in me even when I doubt myself." },
    { day: 10, reason: "For the dreams we share for our life together." },
    { day: 9, reason: "Because you are my greatest supporter." },
    { day: 8, reason: "For the simple, quiet moments we share." },
    { day: 7, reason: "Because you are deeply, uniquely you." },
    { day: 6, reason: "For your courage in pursuing your goals." },
    { day: 5, reason: "Because you bring so much light into my life." },
    { day: 4, reason: "For the incredible future we are crafting together." },
    { day: 3, reason: "Because I love the man you are today." },
    { day: 2, reason: "Because I am even more excited for the man you will be." },
    { day: 1, reason: "Because tomorrow, our biggest adventure begins. Happy Birthday, my Love." }
];

// 2. Logic: Countdown Calculation
const targetDate = new Date('2026-08-01');
const today = new Date();
const diffTime = targetDate - today;
const daysLeft = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

// 3. Update HTML Content
const content = dailyContent.find(c => c.day === daysLeft) || { day: daysLeft, reason: "Counting down to your best decade yet." };

document.getElementById('countdown-days').innerText = `${daysLeft} Days Until Your 30th! 🎂`;
document.getElementById('daily-reason').innerText = `Reason #${content.day}: ${content.reason}`;
document.getElementById('daily-photo').src = 'images/kev.jpeg'; 

// 4. Scratch Canvas Logic
const canvas = document.getElementById('scratch-canvas');
const ctx = canvas.getContext('2d');
canvas.width = 400; 
canvas.height = 500;

// Fill canvas with color
ctx.fillStyle = '#d6d3d1'; 
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Draw Instructions
ctx.fillStyle = '#451a03'; 
ctx.font = 'bold 30px Georgia';
ctx.textAlign = 'center';
ctx.fillText('Scratch to Reveal', 200, 250);
ctx.font = '16px Georgia';
ctx.fillText('Your daily memory awaits...', 200, 290);

// Interaction
canvas.addEventListener('mousemove', (e) => {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath(); 
    ctx.arc(e.offsetX, e.offsetY, 30, 0, Math.PI * 2); 
    ctx.fill();
});