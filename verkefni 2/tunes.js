var synth = new Tone.Synth().toDestination();
var selSong = 'elise';


function change(option_value){
    if (option_value == 'seven'){
        selSong = 'seven'
    }
    if (option_value == 'smoke'){
        selSong = 'smoke'
    }
    if (option_value == 'elise'){
        selSong = 'elise'
    }
}

function playTune() {
    var now = Tone.now();

    if (selSong == 'seven'){
        synth.triggerAttackRelease("e5","4n", now);
        synth.triggerAttackRelease("e5","8n", now + 0.5);
        synth.triggerAttackRelease("g5","4n", now + 0.75);
        synth.triggerAttackRelease("e5","8n", now + 1.25);
        synth.triggerAttackRelease("e5","8n", now + 1.75);
        synth.triggerAttackRelease("g5","4n", now + 1.75);
        synth.triggerAttackRelease("f#5","4n", now + 2.25);
    }
    else if (selSong == 'elise'){
        synth.triggerAttackRelease("e5","8n", now);
        synth.triggerAttackRelease("d#5","8n", now + 0.25);
        synth.triggerAttackRelease("e5","8n", now + 0.5);
        synth.triggerAttackRelease("d#5","8n", now + 0.75);
        synth.triggerAttackRelease("e5","8n", now + 1);
        synth.triggerAttackRelease("b4","8n", now + 1.25);
        synth.triggerAttackRelease("d5","8n", now + 1.5);
        synth.triggerAttackRelease("c5","8n", now + 1.75);
        synth.triggerAttackRelease("a4","8n", now + 2);
        synth.triggerAttackRelease("c4","8n", now + 3);
        synth.triggerAttackRelease("e4","8n", now + 3.25);
        synth.triggerAttackRelease("a4","8n", now + 3.5);
        synth.triggerAttackRelease("b4","8n", now + 3.75);
        synth.triggerAttackRelease("e4","8n", now + 4.75);
        synth.triggerAttackRelease("g#4","8n", now + 5);
        synth.triggerAttackRelease("b4","8n", now + 5.25);
        synth.triggerAttackRelease("c5","8n", now + 5.5);
        synth.triggerAttackRelease("e4","8n", now + 6.5);
        synth.triggerAttackRelease("e5","8n", now + 6.75);
        synth.triggerAttackRelease("d#5","8n", now + 7);
        synth.triggerAttackRelease("e5","8n", now + 7.25);
        synth.triggerAttackRelease("d#5","8n", now + 7.5);
        synth.triggerAttackRelease("e5","8n", now + 7.75);
        synth.triggerAttackRelease("b4","8n", now + 8);
        synth.triggerAttackRelease("d5","8n", now + 8.25);
        synth.triggerAttackRelease("c5","8n", now + 8.5);
        synth.triggerAttackRelease("a4","8n", now + 8.75);
        synth.triggerAttackRelease("c4","8n", now + 9.75);
        synth.triggerAttackRelease("e4","8n", now + 10);
        synth.triggerAttackRelease("a4","8n", now + 10.25);
        synth.triggerAttackRelease("b4","8n", now + 10.5);
        synth.triggerAttackRelease("e4","8n", now + 11.5);
        synth.triggerAttackRelease("c5","8n", now + 11.75);
        synth.triggerAttackRelease("b4","8n", now + 12);
        synth.triggerAttackRelease("a4","8n", now + 12.25);
    }
    else if (selSong == 'smoke'){
        synth.triggerAttackRelease("g4","4n", now);
        synth.triggerAttackRelease("c5","4n", now + 0.5);
        synth.triggerAttackRelease("d#5","4n", now + 1);
        synth.triggerAttackRelease("d5","4n", now + 1.5);
        synth.triggerAttackRelease("c5","4n", now + 2);
        synth.triggerAttackRelease("d#5","4n", now + 2.5);
        synth.triggerAttackRelease("c5","4n", now + 3);
        synth.triggerAttackRelease("d5","4n", now + 3.5);
        synth.triggerAttackRelease("c5","4n", now + 4);
        synth.triggerAttackRelease("g#4","4n", now + 4.5);
        synth.triggerAttackRelease("bb4","4n", now + 5);
        synth.triggerAttackRelease("g4","4n", now + 5.5);
        synth.triggerAttackRelease("g4","4n", now + 8);
        synth.triggerAttackRelease("c5","4n", now + 8.5);
        synth.triggerAttackRelease("d#5","4n", now + 9);
        synth.triggerAttackRelease("d5","4n", now + 9.5);
        synth.triggerAttackRelease("c5","4n", now + 10);
        synth.triggerAttackRelease("d#5","4n", now + 10.5);
        synth.triggerAttackRelease("c5","4n", now + 11);
        synth.triggerAttackRelease("d5","4n", now + 11.5);
        synth.triggerAttackRelease("c5","4n", now + 12);
        synth.triggerAttackRelease("g4","4n", now + 12.5);
        synth.triggerAttackRelease("f#4","4n", now + 13);
        synth.triggerAttackRelease("f4","4n", now + 13.5);
        synth.triggerAttackRelease("f4","4n", now + 16);
        synth.triggerAttackRelease("g#4","4n", now + 16.5);
        synth.triggerAttackRelease("b4","4n", now + 17);
        synth.triggerAttackRelease("d5","4n", now + 17.5);
        synth.triggerAttackRelease("f4","4n", now + 20);
        synth.triggerAttackRelease("g#4","4n", now + 20.5);
        synth.triggerAttackRelease("b4","4n", now + 21);
        synth.triggerAttackRelease("c5","4n", now + 21.5);
        synth.triggerAttackRelease("c4","4n", now + 24);
        synth.triggerAttackRelease("d#4","4n", now + 24.5);
        synth.triggerAttackRelease("bb4","4n", now + 25);
        synth.triggerAttackRelease("g#4","4n", now + 25.5);
        synth.triggerAttackRelease("g4","4n", now + 26);
        synth.triggerAttackRelease("bb4","4n", now + 26.5);
        synth.triggerAttackRelease("g#4","4n", now + 27);
        synth.triggerAttackRelease("g#4","4n", now + 27.5);
        synth.triggerAttackRelease("g4","4n", now + 28);
        synth.triggerAttackRelease("g4","4n", now + 28.5);
        synth.triggerAttackRelease("b3","4n", now + 29);
        synth.triggerAttackRelease("c4","2n", now + 29.5);
        
    }

}

function buttonPressed(clicked_id){
    var now = Tone.now();
    var x = event.key;

    if (x == 'a' || x == 'A' || clicked_id == 'c4'){
        synth.triggerAttackRelease("c4","8n", now);
    }
    if (x == 'w' || x == 'W' || clicked_id == 'c#4'){
        synth.triggerAttackRelease("c#4","8n", now);
    }
    if (x == 's' || x == 'S' || clicked_id == 'd4'){
        synth.triggerAttackRelease("d4","8n", now);
    }
    if (x == 'e' || x == 'E' || clicked_id == 'd#4'){
        synth.triggerAttackRelease("d#4","8n", now);
    }
    if (x == 'd' || x == 'D' || clicked_id == 'e4'){
        synth.triggerAttackRelease("e4","8n", now);
    }
    if (x == 'f' || x == 'F' || clicked_id == 'f4'){
        synth.triggerAttackRelease("f4","8n", now);
    }
    if (x == 't' || x == 'T' || clicked_id == 'f#4'){
        synth.triggerAttackRelease("f#4","8n", now);
    }
    if (x == 'g' || x == 'G' || clicked_id == 'g4'){
        synth.triggerAttackRelease("g4","8n", now);
    }
    if (x == 'y' || x == 'Y' || clicked_id == 'g#4'){
        synth.triggerAttackRelease("g#4","8n", now);
    }
    if (x == 'h' || x == 'H' || clicked_id == 'a4'){
        synth.triggerAttackRelease("a4","8n", now);
    }
    if (x == 'u' || x == 'U' || clicked_id == 'bb4'){
        synth.triggerAttackRelease("bb4","8n", now);
    }
    if (x == 'j' || x == 'J' || clicked_id == 'b4'){
        synth.triggerAttackRelease("b4","8n", now);
    }
    if (x == 'k' || x == 'K' || clicked_id == 'c5'){
        synth.triggerAttackRelease("c5","8n", now);
    }
    if (x == 'o' || x == 'O' || clicked_id == 'c#5'){
        synth.triggerAttackRelease("c#5","8n", now);
    }
    if (x == 'l' || x == 'L' || clicked_id == 'd5'){
        synth.triggerAttackRelease("d5","8n", now);
    }
    if (x == 'p' || x == 'P' || clicked_id == 'd#5'){
        synth.triggerAttackRelease("d#5","8n", now);
    }
    if (x == ';' || x == '.' || clicked_id == 'e5'){
        synth.triggerAttackRelease("e5","8n", now);
    }
}
