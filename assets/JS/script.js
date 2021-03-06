/*-------------------------------------------------Key sounds--------------------------------------------------*/
var C4 = new Audio("assets/sounds/C4.mp3");
var Db4 = new Audio("assets/sounds/Db4.mp3");
var D4 = new Audio("assets/sounds/D4.mp3");
var Eb4 = new Audio("assets/sounds/Eb4.mp3");
var E4 = new Audio("assets/sounds/E4.mp3");
var F4 = new Audio("assets/sounds/F4.mp3");
var Gb4 = new Audio("assets/sounds/Gb4.mp3");
var G4 = new Audio("assets/sounds/G4.mp3");
var Ab4 = new Audio("assets/sounds/Ab4.mp3");
var A4 = new Audio("assets/sounds/A4.mp3");
var Bb4 = new Audio("assets/sounds/Bb4.mp3");
var B4 = new Audio("assets/sounds/B4.mp3");
var C5 = new Audio("assets/sounds/C5.mp3");
var Db5 = new Audio("assets/sounds/Db5.mp3");
var D5 = new Audio("assets/sounds/D5.mp3");
var Eb5 = new Audio("assets/sounds/Eb5.mp3");
var E5 = new Audio("assets/sounds/E5.mp3");

/*-------------------------------------------------Constants for interactivity application--------------------------------------------------*/
let C4Key = document.querySelector(".C4-key");
let Db4Key = document.querySelector(".Db4-key");
let D4Key = document.querySelector(".D4-key");
let Eb4Key = document.querySelector(".Eb4-key");
let E4Key = document.querySelector(".E4-key");
let F4Key = document.querySelector(".F4-key");
let Gb4Key = document.querySelector(".Gb4-key");
let G4Key = document.querySelector(".G4-key");
let Ab4Key = document.querySelector(".Ab4-key");
let A4Key = document.querySelector(".A4-key");
let Bb4Key = document.querySelector(".Bb4-key");
let B4Key = document.querySelector(".B4-key");
let C5Key = document.querySelector(".C5-key");
let Db5Key = document.querySelector(".Db5-key");
let D5Key = document.querySelector(".D5-key");
let Eb5Key = document.querySelector(".Eb5-key");
let E5Key = document.querySelector(".E5-key");
let turnCounter = document.querySelector("#turn");
let playButton = document.querySelector("#play");
let onButton = document.querySelector("#on");


/*-------------------------------------------------Play sound function coneced to the tasts--------------------------------------------------*/
var playSound = audio => {
    var clone = audio.cloneNode();
    clone.play();
    setTimeout(() => (clone.volume = 0.8), 400);
    setTimeout(() => (clone.volume = 0.6), 800);
    setTimeout(() => (clone.volume = 0.4), 1200);
    setTimeout(() => (clone.volume = 0.2), 1600);
    setTimeout(() => (clone.volume = 0), 2000);
};
/*-------------------------------------------------Background_music--------------------------------------------------*/
var background_music, mutebtn, unmutebtn;

function initAudioPlayer() {
    background_music = new Audio();
    background_music.src = "assets/sounds/background_music2.mp3";
    background_music.loop = true;
    background_music.volume = 0.02;
    background_music.play();

    mutebtn = document.querySelector(".mute");
    unmutebtn = document.querySelector(".unmute");

    mutebtn.addEventListener("click", mute);
    unmutebtn.addEventListener("click", unmute);

    function mute() {
        background_music.muted = true
    }

    function unmute() {
        background_music.muted = false
    }
}
window.addEventListener("load", initAudioPlayer);
/*-------------------------------------------------Variables within the game--------------------------------------------------*/
let order = []; //where the order is going to be pushed
let playerOrder = []; //order followed by the player
let flash; //grey color flashing the tasts when sequence played
let turn; //sequence played
let good; //succes 
let compTurn; //computers sequence
let intervalId;
let noise = true;
let on = false;
let win;


/*-------------------------------------------------On button to make the game start when it is presed--------------------------------------------------*/
onButton.addEventListener('click', (event) => {
    if (onButton.checked == true) {
        on = true;
        turnCounter.innerHTML = "-";
        unmutebtn.removeAttribute("disabled"); //remove the  un-mute button so it can apear when the power button is on
        mutebtn.removeAttribute("disabled"); //remove the mutebutton so it can apear when the power button is on
        playButton.removeAttribute("disabled"); //remove the play button so it can apear when the power button is on

    } else {
        on = false;
        turnCounter.innerHTML = "";
        clearColor();
        clearInterval(intervalId);
        unmutebtn.setAttribute("disabled", "disabled");
        mutebtn.setAttribute("disabled", "disabled");
        playButton.setAttribute("disabled", "disabled");

    }
});
// Once the button has been clicked, it will become disabled
playButton.addEventListener('click', (event) => {
    if (on == true || win) {
        playButton.setAttribute("disabled", "disabled");
        play();
    }
});

/*------------Comence the secuence generating the tasts to be played----------*/
function play() {
    win = false;
    order = [];
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    turnCounter.innerHTML = 1;
    good = true;
    for (var i = 0; i < 20; i++) {
        order.push(Math.floor(Math.random() * 16) + 1);
    }
    compTurn = true;

    intervalId = setInterval(gameTurn, 800);
}
/*------------Function  for the game how to behave when it is the computer turn ----------*/
function gameTurn() {
    on = false;

    if (flash == turn) {
        clearInterval(intervalId);
        compTurn = false;
        clearColor();
        on = true;
    }

    if (compTurn) {
        clearColor();
        setTimeout(() => {
            if (order[flash] == 1) one();
            if (order[flash] == 2) two();
            if (order[flash] == 3) three();
            if (order[flash] == 4) four();
            if (order[flash] == 5) five();
            if (order[flash] == 6) six();
            if (order[flash] == 7) seven();
            if (order[flash] == 8) eight();
            if (order[flash] == 9) nine();
            if (order[flash] == 10) ten();
            if (order[flash] == 11) eleven();
            if (order[flash] == 12) twelve();
            if (order[flash] == 13) thirteen();
            if (order[flash] == 14) fourteen();
            if (order[flash] == 15) fifteen();
            if (order[flash] == 16) sixteen();
            if (order[flash] == 17) seventeen();
            flash++;
        }, 200);
    }
}
/*------------Functoion for each of the tasts----------*/
function one() {
    if (noise) {
        playSound(C4);
    }
    noise = true;
    C4Key.style.backgroundColor = "grey";
}

function two() {
    if (noise) {
        playSound(Db4);
    }
    noise = true;
    D4Key.style.backgroundColor = "grey";
}

function three() {
    if (noise) {
        playSound(D4);
    }
    noise = true;
    D4Key.style.backgroundColor = "grey";
}

function four() {
    if (noise) {
        playSound(Eb4);
    }
    noise = true;
    Eb4Key.style.backgroundColor = "grey";
}

function five() {
    if (noise) {
        playSound(E4);
    }
    noise = true;
    E4Key.style.backgroundColor = "grey";
}

function six() {
    if (noise) {
        playSound(F4);
    }
    noise = true;
    F4Key.style.backgroundColor = "grey";
}

function seven() {
    if (noise) {
        playSound(Gb4);
    }
    noise = true;
    Gb4Key.style.backgroundColor = "grey";
}

function eight() {
    if (noise) {
        playSound(G4);
    }
    noise = true;
    G4Key.style.backgroundColor = "grey";
}

function nine() {
    if (noise) {
        playSound(Ab4);
    }
    noise = true;
    Ab4Key.style.backgroundColor = "grey";
}

function ten() {
    if (noise) {
        playSound(A4);
    }
    noise = true;
    A4Key.style.backgroundColor = "grey";
}

function eleven() {
    if (noise) {
        playSound(Bb4);
    }
    noise = true;
    Bb4Key.style.backgroundColor = "grey";
}

function twelve() {
    if (noise) {
        playSound(B4);
    }
    noise = true;
    B4Key.style.backgroundColor = "grey";
}

function thirteen() {
    if (noise) {
        playSound(C5);
    }
    noise = true;
    C5Key.style.backgroundColor = "grey";
}

function fourteen() {
    if (noise) {
        playSound(Db5);
    }
    noise = true;
    Db5Key.style.backgroundColor = "grey";
}

function fifteen() {
    if (noise) {
        playSound(D5);
    }
    noise = true;
    D5Key.style.backgroundColor = "grey";
}

function sixteen() {
    if (noise) {
        playSound(Eb5);
    }
    noise = true;
    Eb5Key.style.backgroundColor = "grey";
}

function seventeen() {
    if (noise) {
        playSound(E5);
    }
    noise = true;
    E5Key.style.backgroundColor = "grey";
}
/*------------Change background color to original color after the sequence is run----------*/
function clearColor() {
    C4Key.style.backgroundColor = "white";
    Db4Key.style.backgroundColor = "black";

    D4Key.style.backgroundColor = "white";

    Eb4Key.style.backgroundColor = "black";

    E4Key.style.backgroundColor = "white";

    F4Key.style.backgroundColor = "white";

    Gb4Key.style.backgroundColor = "black";

    G4Key.style.backgroundColor = "white";

    Ab4Key.style.backgroundColor = "black";

    A4Key.style.backgroundColor = "white";

    Bb4Key.style.backgroundColor = "black";

    B4Key.style.backgroundColor = "white";

    C5Key.style.backgroundColor = "white";

    Db5Key.style.backgroundColor = "black";

    D5Key.style.backgroundColor = "white";

    Eb5Key.style.backgroundColor = "black";

    E5Key.style.backgroundColor = "white";

}

/*------------Changes color of keyboard buttons to grey----------*/
function flashColor() {
    C4Key.style.backgroundColor = "grey";
    Db4Key.style.backgroundColor = "grey";

    D4Key.style.backgroundColor = "grey";

    Eb4Key.style.backgroundColor = "grey";

    E4Key.style.backgroundColor = "grey";

    F4Key.style.backgroundColor = "grey";

    Gb4Key.style.backgroundColor = "grey";

    G4Key.style.backgroundColor = "grey";

    Ab4Key.style.backgroundColor = "grey";

    A4Key.style.backgroundColor = "grey";

    Bb4Key.style.backgroundColor = "grey";

    B4Key.style.backgroundColor = "grey";

    C5Key.style.backgroundColor = "grey";

    Db5Key.style.backgroundColor = "grey";

    D5Key.style.backgroundColor = "grey";

    Eb5Key.style.backgroundColor = "grey";

    E5Key.style.backgroundColor = "grey";

}
/*------------tracker when the player has clicked the sections----------*/
C4Key.addEventListener("click", (event) => {
    if (on) {
        playerOrder.push(1);
        check();
        one();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})


Db4Key.addEventListener("click", (event) => {
    if (on) {
        playerOrder.push(2);
        check();
        two();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})
D4Key.addEventListener("click", (event) => {
    if (on) {
        playerOrder.push(3);
        check();
        three();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})
Eb4Key.addEventListener("click", (event) => {
    if (on) {
        playerOrder.push(4);
        check();
        four();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})
E4Key.addEventListener("click", (event) => {
    if (on) {
        playerOrder.push(5);
        check();
        five();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})
F4Key.addEventListener("click", (event) => {
    if (on) {
        playerOrder.push(6);
        check();
        six();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})
Gb4Key.addEventListener("click", (event) => {
    if (on) {
        playerOrder.push(7);
        check();
        seven();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})
G4Key.addEventListener("click", (event) => {
    if (on) {
        playerOrder.push(8);
        check();
        eight();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})
Ab4Key.addEventListener("click", (event) => {
    if (on) {
        playerOrder.push(9);
        check();
        nine();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})
A4Key.addEventListener("click", (event) => {
    if (on) {
        playerOrder.push(10);
        check();
        ten();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})
Bb4Key.addEventListener("click", (event) => {
    if (on) {
        playerOrder.push(11);
        check();
        eleven();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})
B4Key.addEventListener("click", (event) => {
    if (on) {
        playerOrder.push(12);
        check();
        twelve();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})
C5Key.addEventListener("click", (event) => {
    if (on) {
        playerOrder.push(13);
        check();
        thirteen();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})
Db5Key.addEventListener("click", (event) => {
    if (on) {
        playerOrder.push(14);
        check();
        fourteen();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})
D5Key.addEventListener("click", (event) => {
    if (on) {
        playerOrder.push(15);
        check();
        fifteen();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})
Eb5Key.addEventListener("click", (event) => {
    if (on) {
        playerOrder.push(16);
        check();
        sixteen();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})
E5Key.addEventListener("click", (event) => {
    if (on) {
        playerOrder.push(17);
        check();
        seventeen();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})
/*------------Check the player moves----------*/
function check() {
    if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
        good = false;

    if (playerOrder.length == 6 && good) {
        winGame();
    }
    /*------------If wrong answers----------*/
    if (good == false) {
        flashColor();
        turnCounter.innerHTML = "NO!";
        setTimeout(() => {
            play();

        }, 800);

        noise = false;
    }
    /*------------If good answer but not win game move to the other level----------*/
    if (turn == playerOrder.length && good && !win) {
        turn++;
        playerOrder = [];
        compTurn = true;
        flash = 0;
        turnCounter.innerHTML = turn;
        intervalId = setInterval(gameTurn, 800);
    }

}
/*------------If the answers match flash all tasts with grey color and show win on counter----------*/
function winGame() {
    flashColor();
    turnCounter.innerHTML = "WIN!";
    on = false;
    win = true;
}