
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