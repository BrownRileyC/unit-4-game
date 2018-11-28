var cloud = {
    name: "Cloud",
    health: 175,
    attack: 7,
    power: 7,
    counter: 15,
    isHero: false,
    inCombat: false
};
var cid = {
    name: "Cid",
    health: 150,
    attack: 10,
    power: 10,
    counter: 25,
    isHero: false,
    inCombat: false
};
var kefka = {
    name: "Kefka",
    health: 225,
    attack: 5,
    power: 5,
    counter: 10,
    isHero: false,
    inCombat: false
};
var vivi = {
    name: "Vivi",
    health: 125,
    attack: 12,
    power: 12,
    counter: 5,
    isHero: false,
    inCombat: false
};

var characterArray = [cloud, cid, kefka, vivi];
var hero;
var rival;
var heroSelected = false;
var rivalSelected = false;

var characterImageArray = ["src='./assets/images/cloud.png'>", "src='./assets/images/cid.png'>", "src='./assets/images/kefka.png'>", "src='./assets/images/Vivi.png'>"]

function createCharacterCard(num) {
    var characterDiv = $('<div>');
    characterDiv.addClass(characterArray[num].name);
    characterDiv.appendTo(".characterRow");
    console.log("I ran after the div maker");
    var characterName = $('<h3>');
    characterName.appendTo(characterDiv);
    console.log("I ran after appending");
    characterName.text(characterArray[num].name);
    var characterImage = $("<img class='characterImage' "+characterImageArray[num]);
    characterImage.appendTo(characterDiv);
    var characterHealth = $('<h3>');
    characterHealth.addClass(characterArray[num].name+"Health");
    characterHealth.appendTo(characterDiv);
    characterHealth.text(characterArray[num].health);
}

console.log("I'm cloud's health: "+cloud.health);

var fight = function(player,cpu) {
    if (cpu.health < 1) {
        console.log("you've won")
    } else if (player.health < 1) {
        console.log("You've lost the power to fight")
    } else{
    cpu.health = cpu.health - player.attack;
    $('.'+cpu.name+'Health').text(cpu.health);
    player.attack = player.attack + player.power;
    if (cpu.health > 0){
        console.log(cpu);
    player.health = player.health - cpu.attack;
    $('.'+player.name+'Health').text(player.health);
    if (player.health < 1) {
        console.log("You've lost the power to fight")
    };
    };
    console.log(player);
};
}; 

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
        hero = cloud;
        };
        if (hero != cloud) {
            if (rivalSelected === false) {
                $('.Cloud').detach().appendTo('.fighterRow');
                rivalSelected = true;
                rival = cloud;
            };
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
        hero = cid;
        };
        if (hero != cid) {
            if (rivalSelected === false) {
                $('.Cid').detach().appendTo('.fighterRow');
                rivalSelected = true;
                rival = cid;
            };
        };
    });

    $('.Kefka').click(function(){
        if (heroSelected === false) {
        $('.Cloud').detach().appendTo('.rivalRow');
        $('.Cid').detach().appendTo('.rivalRow');
        $('.Kefka').detach().appendTo('.heroRow');
        $('.Vivi').detach().appendTo('.rivalRow');
        heroSelected = true;
        hero = kefka;
        };
        if (hero != kefka) {
            if (rivalSelected === false) {
                $('.Kefka').detach().appendTo('.fighterRow');
                rivalSelected = true;
                rival = kefka;
            };
        };
    });
    
    $('.Vivi').click(function(){
        if (heroSelected === false) {
        $('.Cloud').detach().appendTo('.rivalRow');
        $('.Cid').detach().appendTo('.rivalRow');
        $('.Kefka').detach().appendTo('.rivalRow');
        $('.Vivi').detach().appendTo('.heroRow');
        heroSelected = true;
        Hero = vivi;
        };
        if (hero != vivi) {
            if (rivalSelected === false) {
                $('.Vivi').detach().appendTo('.fighterRow');
                rivalSelected = true;
                rival = vivi;
            };
        };
    });

    $('.fightButton').click(function(){
        if (rivalSelected === true) {
            fight(hero, rival);
        }
    })
});