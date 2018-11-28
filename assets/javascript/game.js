var characterArray = ["Cloud", "Cid", "Kefka", "Vivi"];

var runCounter = 0;

var characterImageArray = ["src='./assets/images/cloud.png'>", "src='./assets/images/cid.png'>", "src='./assets/images/kefka.png'>", "src='./assets/images/Vivi.png'>"]
console.log(characterArray[0]);

function createCharacterCard(num) {
    runCounter++;
    console.log("I ran " + runCounter);
    var characterDiv = $('<div>');
    characterDiv.addClass(characterArray[num]);
    characterDiv.appendTo(".characterRow");
    console.log("I ran after the div maker");
    var characterName = $('<h3>');
    characterName.appendTo(characterDiv);
    console.log("I ran after appending");
    characterName.text(characterArray[num]);
    var characterImage = $("<img class='characterImage' "+characterImageArray[num]);
    characterImage.appendTo(characterDiv);
    var characterHealth = $('<h3>');
    characterHealth.addClass(characterArray[num]+"Health");
    characterHealth.appendTo(characterDiv);
    characterHealth.text("HP");
}

$(document).ready(function() {
    
    for (var i = 0; i < characterArray.length; i++) {
        console.log(characterArray.length);
        createCharacterCard(i);
    }
});