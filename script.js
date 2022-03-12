const WHITE_KEYS = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';']
const BLACK_KEYS = ['w', 'e', 't', 'y', 'u', 'o', 'p']


const keys = document.querySelectorAll('key')
function httpGet(theUrl)
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };
    xhttp.open("GET", "https://veff2022-h5.herokuapp.com/api/v1/tunes", true);
    xhttp.send();
}
keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})

function playNote() {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()

}

fetch("https://veff2022-h5.herokuapp.com/api/v1/tunes")
    .then(function(reponse){
        return reponse.json();
    })
    .then(function(reponse){
        appendData(data);
    })
    .catch(function(err){
        console.log(err);
    });