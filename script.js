const typingText = document.getElementById('typing-text')
const typingContainer = document.getElementById('typing-container')
const container = document.querySelector('.container')
const cursor = document.getElementById('cursor');

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const audio = document.getElementById('myAudio')

// Text to be Typed current character ARRAY BASED
const phrases = ["Giselle...",
"We've had an amazing summer...",
"Full of underground raves...",
"Being feral rats with each other...",
"Can't forget the besos and drinks :P",
"And now, I have a question for you..."];


let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 200; //ms

// Type out text by character
function typeText() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        // Finished typing current Phrase
        isDeleting = true;
        typingSpeed = 50;
        setTimeout(typeText, 1000); //Pause 
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex++;
        typingSpeed = 100;

        if (phraseIndex === phrases.length) {
            showMainQuestion();
            return;
        }
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(typeText, typingSpeed);
    }
}

typeText();




function showMainQuestion() {
    typingContainer.style.display = 'none';
    container.style.display = 'block';
}
//HOLY GRAIL TO GET BUTTON TO PLAY
function play() {
    var audio = new Audio('https://github.com/OoBubblzoO/MusicStreamHost/raw/main/Gravedgr-SoAliveVIP_final_trimmed.ogg');
        audio.play();
}


const questions = [
    "Are you sure?",
    "We can keep being bass heads together?",
    "What if I headbang harder?",
    "What about the shows we have coming up :(",
    "You want to listen to untz untz untz with someone else that bad huh?"
];
let questionIndex = 0;


yesBtn.addEventListener('click',() => {
    
    document.body.innerHTML = '<h1 style="font-size: 4em; animation: glitch 1s linear infinite; ">HECK YEAH!<br>Let\'s destroy the rails together! 🔊💀</h1>';
    document.body.style.flexDirection = 'column';
    document.body.classList.add('pulsating');

    audio.play().catch(e => console.error("Audio play failed:", e));
});


noBtn.addEventListener('click', () =>{
    if (questionIndex < questions.length) {
        alert(questions[questionIndex]);
        questionIndex++;
        noBtn.style.fontSize = parseInt(window.getComputedStyle(noBtn).fontSize) - 2 + 'px';
        yesBtn.style.fontSize = parseInt(window.getComputedStyle(yesBtn).fontSize) + 2 + 'px';

    } else {
        alert("Fine, permanent air jail for you!");
        noBtn.disabled = true;
    }
});