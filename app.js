// 1. Data: The 30 reasons with images
const dailyContent = [
    { day: 30, reason: "Because you have the most infectious laugh in the world.", img: "images/kev.jpeg" },
    { day: 29, reason: "For every time you've supported my wildest dreams.", img: "images/date1.jpg" },
    { day: 28, reason: "Because you make even the hardest days feel easy.", img: "images/date2.jpg" },
    { day: 27, reason: "Because your work ethic inspires me to be better.", img: "images/kev.jpeg" },
    { day: 26, reason: "For the way you always know how to calm me down.", img: "images/date1.jpg" },
    { day: 25, reason: "Because you're not just my partner, you're my best friend.", img: "images/date2.jpg" },
    { day: 24, reason: "For the adventures we’ve had and the ones we’re planning. The battles we have fought together and the victories we have won.", img: "images/kev.jpeg" },
    { day: 23, reason: "Because you make me feel safe in a chaotic world. I keep yapping to almost everyone about how I have the most supportive partner in the whole world..you have held me down in this season babe, and i appreciate your strength.", img: "images/date1.jpg" },
    { day: 22, reason: "For your kindness toward everyone you meet.", img: "images/date2.jpg" },
    { day: 21, reason: "Because you listen and care about me with your whole heart. Hapo kwa listen though, haha(kuna ile story ya ku exist group ya Love Story, hadi wa leo unanisungusha tu...haaha).", img: "images/kev.jpeg" },
    { day: 20, reason: "For the way you make our relationship feel like so safe and secure.", img: "images/date1.jpg" },
    { day: 19, reason: "Because you are so incredibly intelligent.", img: "images/date2.jpg" },
    { day: 18, reason: "For your unwavering loyalty.", img: "images/kev.jpeg" },
    { day: 17, reason: "Because your smile can change my entire mood.", img: "images/date1.jpg" },
    { day: 16, reason: "For the sacrifices you make for our future.", img: "images/date2.jpg" },
    { day: 15, reason: "Because you are the man I want to build a family with.", img: "images/kev.jpeg" },
    { day: 14, reason: "For the patience you show me every single day.", img: "images/date1.jpg" },
    { day: 13, reason: "Because you challenge me to grow.", img: "images/date2.jpg" },
    { day: 12, reason: "For your integrity in everything you do.", img: "images/kev.jpeg" },
    { day: 11, reason: "Because you believe in me even when I doubt myself.", img: "images/date1.jpg" },
    { day: 10, reason: "For the dreams we share for our life together.", img: "images/date2.jpg" },
    { day: 9, reason: "Because you are my greatest supporter.", img: "images/kev.jpeg" },
    { day: 8, reason: "For the simple, quiet moments we share.", img: "images/date1.jpg" },
    { day: 7, reason: "Because you are deeply, uniquely you.", img: "images/date2.jpg" },
    { day: 6, reason: "For your courage in pursuing your goals.", img: "images/kev.jpeg" },
    { day: 5, reason: "Because you bring so much light into my life.", img: "images/date1.jpg" },
    { day: 4, reason: "For the incredible future we are crafting together.", img: "images/date2.jpg" },
    { day: 3, reason: "Because I love the man you are today. Even more excited for the one you will become.", img: "images/kev.jpeg" },
    { day: 2, reason: "Because I am even more excited for the man you will be.", img: "images/date1.jpg" },
    { day: 1, reason: "Because tomorrow, our biggest adventure begins. Happy Birthday, my Love. This is definitely 30! but.....with me!!!!!", img: "images/date2.jpg" }
];

// 2. Logic: Countdown Calculation
const targetDate = new Date('2026-08-01');
const today = new Date();
const diffTime = targetDate - today;
const daysLeft = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

// 3. Update HTML Content
const content = dailyContent.find(c => c.day === daysLeft) || { day: daysLeft, reason: "Counting down to your best decade yet.", img: "images/kev.jpeg" };

document.getElementById('countdown-days').innerText = `${daysLeft} Days Until Your 30th! 🎂`;
document.getElementById('daily-reason').innerText = `Reason #${content.day}: ${content.reason}`;
document.getElementById('daily-photo').src = content.img;

// 4. Tap-to-Reveal and Music Logic
const canvas = document.getElementById('scratch-canvas');
const ctx = canvas.getContext('2d');
const music = new Audio('music/chooseyou-music.mp3'); 

canvas.width = 400; 
canvas.height = 500;

ctx.fillStyle = '#d6d3d1'; 
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = '#451a03'; 
ctx.font = 'bold 30px Georgia';
ctx.textAlign = 'center';
ctx.fillText('Tap to Reveal', 200, 250);
ctx.font = '16px Georgia';
ctx.fillText('Tap here for your daily memory...', 200, 290);

canvas.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.style.display = 'none';

    // Play music once per day
    const lastPlayed = localStorage.getItem('lastPlayedDate');
    const todayStr = new Date().toDateString();
    
    if (lastPlayed !== todayStr) {
        music.play().catch(e => console.log("Interaction required for audio"));
        localStorage.setItem('lastPlayedDate', todayStr);
    }
});