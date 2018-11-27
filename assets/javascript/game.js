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