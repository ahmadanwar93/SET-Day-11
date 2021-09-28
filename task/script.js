var keyOne = document.getElementById("keyPressOne");
var keyTwo = document.getElementById("keyPressTwo");
var keyThree = document.getElementById("keyPressThree");
var keyFour = document.getElementById("keyPressFour");
var keyFive = document.getElementById("keyPressFive");
var keySix = document.getElementById("keyPressSix");
var keySeven = document.getElementById("keyPressSeven");
var keyEight= document.getElementById("keyPressEight");
var keyNine = document.getElementById("keyPressNine");
var keyTen = document.getElementById("keyPressTen");
var recordButton = document.getElementById("recordButton");
var playButton = document.getElementById("playButton");

var songOne = document.getElementById("songOne");
var songTwo = document.getElementById("songTwo");
var songThree = document.getElementById("songThree");
var songFour = document.getElementById("songFour");
var songFive = document.getElementById("songFive");
var songSix = document.getElementById("songSix");
var songSeven = document.getElementById("songSeven");
var songEight= document.getElementById("songEight");
var songNine = document.getElementById("songNine");
var songTen = document.getElementById("songTen");

var innerBarOne = document.getElementById("innerBarOne");
var innerBarTwo = document.getElementById("innerBarTwo");
var innerBarThree = document.getElementById("innerBarThree");
var innerBarFour = document.getElementById("innerBarFour");
var innerBarFive = document.getElementById("innerBarFive");
var innerBarSix = document.getElementById("innerBarSix");
var innerBarSeven = document.getElementById("innerBarSeven");
var innerBarEight= document.getElementById("innerBarEight");
var innerBarNine = document.getElementById("innerBarNine");
var innerBarTen = document.getElementById("innerBarTen");



document.addEventListener("keydown", pressedKey);
document.addEventListener("keyup", releasedKey);
recordButton.addEventListener("click", recordSong);
playButton.addEventListener("click", playRecordedSong);

var recordSongArr = [];



function pressedKey(evt){
    // console.log(evt.keyCode);

    recordSongArr.push(evt.keyCode);
    console.log(recordSongArr)
    // button a
    if (evt.keyCode == 65){
        songOne.play();
        innerBarOne.style.height = '100%';
        keyOne.className = "activekey";

    }

    // button s
    if (evt.keyCode == 83){
        songTwo.play();
        innerBarTwo.style.height = '100%';
        keyTwo.className = "activekey";
    }

    // button d
    if (evt.keyCode == 68){
        songThree.play();
        innerBarThree.style.height = '100%';
        keyThree.className = "activekey";
    }

    // button f
    if (evt.keyCode == 70){
        songFour.play();
        innerBarFour.style.height = '100%';
        keyFour.className = "activekey";
    }

    // button g
    if (evt.keyCode == 71){
        songFive.play();
        innerBarFive.style.height = '100%';
        keyFive.className = "activekey";
    }

    // button h
    if (evt.keyCode == 72){
        songSix.play();
        innerBarSix.style.height = '100%';
        keySix.className = "activekey";
    }

    // button j
    if (evt.keyCode == 74){
        songSeven.play();
        innerBarSeven.style.height = '100%';
        keySeven.className = "activekey";
    }

    // button k
    if (evt.keyCode == 75){
        songEight.play();
        innerBarEight.style.height = '100%';
        keyEight.className = "activekey";
    }

    // button l
    if (evt.keyCode == 76){
        songNine.play();
        innerBarNine.style.height = '100%';
        keyNine.className = "activekey";
    }
    
    // button z
    if (evt.keyCode == 90){
        songTen.play();
        innerBarTen.style.height = '100%';
        keyTen.className = "activekey";
    }
}

function releasedKey(evt){
    // console.log(evt.keyCode);
    // button a
    if (evt.keyCode == 65){
        innerBarOne.style.height = '0%';
        keyOne.className = "keyPress";
    }

    // button s
    if (evt.keyCode == 83){
        innerBarTwo.style.height = '0%';
        keyTwo.className = "keyPress";
    }

    // button d
    if (evt.keyCode == 68){
        innerBarThree.style.height = '0%';
        keyThree.className = "keyPress";
    }

    // button f
    if (evt.keyCode == 70){
        innerBarFour.style.height = '0%';
        keyFour.className = "keyPress";
    }

    // button g
    if (evt.keyCode == 71){
        innerBarFive.style.height = '0%';
        keyFive.className = "keyPress";
    }

    // button h
    if (evt.keyCode == 72){
        innerBarSix.style.height = '0%';
        keySix.className = "keyPress";
    }

    // button j
    if (evt.keyCode == 74){
        innerBarSeven.style.height = '0%';
        keySeven.className = "keyPress";
    }

    // button k
    if (evt.keyCode == 75){
        innerBarEight.style.height = '0%';
        keyEight.className = "keyPress";
    }

    // button l
    if (evt.keyCode == 76){
        innerBarNine.style.height = '0%';
        keyNine.className = "keyPress";
    }
    
    // button z
    if (evt.keyCode == 90){
        innerBarTen.style.height = '0%';
        keyTen.className = "keyPress";
    }
}

function recordSong(){
    recordSongArr = [];

}

let i = 0;
function playRecordedSong(){
    setTimeout(function(){
        if (recordSongArr[i] == 65){
            songOne.play();
            // innerBarOne.style.height = '100%';
            // keyOne.className = "activekeyAnimation";
            // innerBarOne.className = "innerBarAnimation";
            // keyOne.className = "activekey";
            keyOne.animate([{backgroundColor: "violet"},{backgroundColor: "Magenta"}],1000);
            innerBarOne.animate([{height:"0%"},{height:"100%"},{height:"0%"}],1000);   

    }

        // button s
        if (recordSongArr[i] == 83){
            songTwo.play();
            // innerBarTwo.style.height = '100%';
            // keyTwo.className = "activekey";
            keyTwo.animate([{backgroundColor: "violet"},{backgroundColor: "Magenta"}],1000);
            innerBarTwo.animate([{height:"0%"},{height:"100%"},{height:"0%"}],1000);
        }

        // button d
        if (recordSongArr[i] == 68){
            songThree.play();
            // innerBarThree.style.height = '100%';
            // keyThree.className = "activekey";
            keyThree.animate([{backgroundColor: "violet"},{backgroundColor: "Magenta"}],1000);
            innerBarThree.animate([{height:"0%"},{height:"100%"},{height:"0%"}],1000);
        }

        // button f
        if (recordSongArr[i] == 70){
            songFour.play();
            // innerBarFour.style.height = '100%';
            // keyFour.className = "activekey";
            keyFour.animate([{backgroundColor: "violet"},{backgroundColor: "Magenta"}],1000);
            innerBarFour.animate([{height:"0%"},{height:"100%"},{height:"0%"}],1000);
        }

        // button g
        if (recordSongArr[i] == 71){
            songFive.play();
            // innerBarFive.style.height = '100%';
            // keyFive.className = "activekey";
            keyFive.animate([{backgroundColor: "violet"},{backgroundColor: "Magenta"}],1000);
            innerBarFive.animate([{height:"0%"},{height:"100%"},{height:"0%"}],1000);
        }

        // button h
        if (recordSongArr[i] == 72){
            songSix.play();
            // innerBarSix.style.height = '100%';
            // keySix.className = "activekey";
            keySix.animate([{backgroundColor: "violet"},{backgroundColor: "Magenta"}],1000);
            innerBarSix.animate([{height:"0%"},{height:"100%"},{height:"0%"}],1000);
        }

        // button j
        if (recordSongArr[i] == 74){
            songSeven.play();
            // innerBarSeven.style.height = '100%';
            // keySeven.className = "activekey";
            keySeven.animate([{backgroundColor: "violet"},{backgroundColor: "Magenta"}],1000);
            innerBarSeven.animate([{height:"0%"},{height:"100%"},{height:"0%"}],1000);
        }

        // button k
        if (recordSongArr[i] == 75){
            songEight.play();
            // innerBarEight.style.height = '100%';
            // keyEight.className = "activekey";
            keyEight.animate([{backgroundColor: "violet"},{backgroundColor: "Magenta"}],1000);
            innerBarEight.animate([{height:"0%"},{height:"100%"},{height:"0%"}],1000);
        }

        // button l
        if (recordSongArr[i] == 76){
            songNine.play();
            // innerBarNine.style.height = '100%';
            // keyNine.className = "activekey";
            keyNine.animate([{backgroundColor: "violet"},{backgroundColor: "Magenta"}],1000);
            innerBarNine.animate([{height:"0%"},{height:"100%"},{height:"0%"}],1000);
        }
        
        // button z
        if (recordSongArr[i] == 90){
            songTen.play();
            // innerBarTen.style.height = '100%';
            // keyTen.className = "activekey";
            keyTen.animate([{backgroundColor: "violet"},{backgroundColor: "Magenta"}],1000);
            innerBarTen.animate([{height:"0%"},{height:"100%"},{height:"0%"}],1000);
    }
        i += 1;
        if (i < recordSongArr.length){
            playRecordedSong();
        }
    },2000)
}
