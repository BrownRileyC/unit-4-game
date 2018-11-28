var cloud = {
    name: "Cloud",
    health: 175,
    attack: 7,
    power: 7,
    counter: 15
};
var cid = {
    name: "Cid",
    health: 150,
    attack: 10,
    power: 10,
    counter: 25
};
var kefka = {
    name: "Kefka",
    health: 225,
    attack: 5,
    power: 5,
    counter: 10
};
var vivi = {
    name: "Vivi",
    health: 125,
    attack: 12,
    power: 12,
    counter: 5
};

var characterArray = ["Cloud", "Cid", "Kefka", "Vivi"];

var heroSelected = false;

var characterImageArray = ["src='./assets/images/cloud.png'>", "src='./assets/images/cid.png'>", "src='./assets/images/kefka.png'>", "src='./assets/images/Vivi.png'>"]

function createCharacterCard(num) {
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

    $('.Cloud').click(function(){
        if (heroSelected === false) {
        $('.Cloud').detach().appendTo('.heroRow');
        $('.Cid').detach().appendTo('.rivalRow');
        $('.Kefka').detach().appendTo('.rivalRow');
        $('.Vivi').detach().appendTo('.rivalRow');
        heroSelected = true;
        };
        console.log(heroSelected);
    });

    $('.Cid').click(function(){
        if (heroSelected === false) {
        $('.Cloud').detach().appendTo('.rivalRow');
        $('.Cid').detach().appendTo('.HeroRow');
        $('.Kefka').detach().appendTo('.rivalRow');
        $('.Vivi').detach().appendTo('.rivalRow');
        heroSelected = true;
        };
    });

    $('.Kefka').click(function(){
        if (heroSelected === false) {
        $('.Cloud').detach().appendTo('.rivalRow');
        $('.Cid').detach().appendTo('.rivalRow');
        $('.Kefka').detach().appendTo('.heroRow');
        $('.Vivi').detach().appendTo('.rivalRow');
        heroSelected = true;
        };
    });
    
    $('.Vivi').click(function(){
        if (heroSelected === false) {
        $('.Cloud').detach().appendTo('.rivalRow');
        $('.Cid').detach().appendTo('.rivalRow');
        $('.Kefka').detach().appendTo('.rivalRow');
        $('.Vivi').detach().appendTo('.heroRow');
        heroSelected = true;
        };
    });
});