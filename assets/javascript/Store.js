
// Maybe change it up so I generate the character divs using jQuery

var characterArray = ["Cloud", "Cid", "Kefka", "Vivi"];
var characterHealthArray = ["175","150","225","125"];
var characterImageArray = ["../images/cloud.png","../images/cid.png", "../images/kefka.png", "../images/Vivi.png"];

var simpleFunction = function() {
    var newDiv = $("<div>");
    newDiv.text("Hey I exist");
    newDiv.appendto(".characterRow");
}



var createCharacterDiv = function(){
    var characterDiv = $("<div>");
    characterDiv.addClass(characterArray[i]+"Div");
    $(".characterRow").append(characterDiv);
    var name = $("<h3>"+characterArray[i]+"</h3>");
    characterDiv.append(name);
    var image = $("<img class='characterImage' src='"+characterImageArray[i]+">");
    var HP = $("<h3>"+characterHealthArray+"</h3>");
    HP.addClass(characterArray[i]+"Health");
}

for(var i = 0;i<characterArray.length;i++){
    createCharacterDiv(i);
}

var cloud = {
    health: 175,
    attack: 7,
    power: 7,
    counter: 15
};
var cid = {
    health: 150,
    attack: 10,
    power: 10,
    counter: 25
};
var kefka = {
    health: 225,
    attack: 5,
    power: 5,
    counter: 10
};
var vivi = {
    health: 125,
    attack: 12,
    power: 12,
    counter: 5
};

var attack = function(x,y) {
    if (y.health < 1) {
        console.log("you've won")
    } else if (x.health < 1) {
        console.log("You've lost the power to fight")
    } else{
    y.health = y.health - x.attack;
    x.attack = x.attack + x.power;
    if (y.health > 0){
        console.log(y);
    x.health = x.health - y.attack;
    if (x.health < 1) {
        console.log("You've lost the power to fight")
    };
    };
    console.log("hero status " + x);
};
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
    console.log(heroSelected);

    $('.Cloud').click(function(){
        if (heroSelected = false) {
        $('.Cloud').detach().appendTo('.heroRow');
        $('.Cid').detach().appendTo('.rivalRow');
        $('.Kefka').detach().appendTo('.rivalRow');
        $('.Vivi').detach().appendTo('.rivalRow');
        heroSelected = true;
        };
        console.log(heroSelected);
    });

    $('.Cid').click(function(){
        if (heroSelected = false) {
        $('.Cloud').detach().appendTo('.rivalRow');
        $('.Cid').detach().appendTo('.HeroRow');
        $('.Kefka').detach().appendTo('.rivalRow');
        $('.Vivi').detach().appendTo('.rivalRow');
        heroSelected = true;
        };
    });

    $('.Kefka').click(function(){
        if (heroSelected = false) {
        $('.Cloud').detach().appendTo('.rivalRow');
        $('.Cid').detach().appendTo('.rivalRow');
        $('.Kefka').detach().appendTo('.heroRow');
        $('.Vivi').detach().appendTo('.rivalRow');
        heroSelected = true;
        };
    });
    
    $('.Vivi').click(function(){
        if (heroSelected = false) {
        $('.Cloud').detach().appendTo('.rivalRow');
        $('.Cid').detach().appendTo('.rivalRow');
        $('.Kefka').detach().appendTo('.rivalRow');
        $('.Vivi').detach().appendTo('.heroRow');
        heroSelected = true;
        };
    });
});