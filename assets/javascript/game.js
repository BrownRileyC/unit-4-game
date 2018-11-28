var cloud = {
    name: "Cloud",
    health: 175,
    startingHealth: 175,
    attack: 7,
    power: 7,
    counter: 15
};
var cid = {
    name: "Cid",
    health: 15,
    startingHealth: 15,
    attack: 10,
    power: 10,
    counter: 25
};
var kefka = {
    name: "Kefka",
    health: 25,
    startingHealth: 25,
    attack: 5,
    power: 5,
    counter: 10
};
var vivi = {
    name: "Vivi",
    health: 12,
    startingHealth: 12,
    attack: 12,
    power: 12,
    counter: 5
};

var characterArray = [cloud, cid, kefka, vivi];
var hero;
var rival;
var heroSelected = false;
var rivalSelected = false;
var victories = 0;

var startingText = $('<h2>');
startingText.addClass('heroAttack');
var rivalAttack = $('<h2>');
rivalAttack.addClass('rivalAttack');

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
    characterHealth.text(characterArray[num].startingHealth);
}

var resetGame = function() {
    hero;
    rival;
    heroSelected = false;
    rivalSelected = false;
    victories = 0;
    $('.heroRow').empty();
    $('.rivalRow').empty();
    for (var i = 0; i < characterArray.length; i++) {
        createCharacterCard(i);
    }
}
var fight = function(player,cpu) {
    cpu.health = cpu.health - player.attack;
    $('.'+cpu.name+'Health').text(cpu.health);
    startingText.text("You dealt " + player.attack + " damage.  You can feel yourself growing stronger");
    player.attack = player.attack + player.power;
    if (cpu.health > 0){
        player.health = player.health - cpu.counter;
        if (player.health < 1) {
            startingText.text("You have been Defeated!")
        } else {
            rivalAttack.text(cpu.name + " dealt you a serious blow.  You took " + cpu.counter + " damage.")
            $('.'+player.name+'Health').text(player.health);
        };
    } else {
        $("."+cpu.name).detach();
        victories++;
        rivalSelected = false;
        rivalAttack.text("");
        if (victories < 3){
        startingText.text("You are victorious, select your next rival");
        } else {
            startingText.text("Congratulations, you survived the Arena");
            resetGame();
        }
    }
    
}

$(document).ready(function() {
    
    for (var i = 0; i < characterArray.length; i++) {
        createCharacterCard(i);
    }
    
    $('.combatFeed').append(startingText).append(rivalAttack);
    startingText.text("Select your Hero and first rival");

    $('.characterRow').on('click', '.Cloud',(function(){
        if (heroSelected === false) {
        $('.Cloud').detach().appendTo('.heroRow');
        $('.Cid').detach().appendTo('.rivalRow');
        $('.Kefka').detach().appendTo('.rivalRow');
        $('.Vivi').detach().appendTo('.rivalRow');
        heroSelected = true;
        hero = cloud;
        };
    }));

    $('.rivalRow').on('click', '.Cloud', (function() {
        if (hero != cloud) {
            if (rivalSelected === false) {
                $('.Cloud').detach().appendTo('.fighterRow');
                rivalSelected = true;
                rival = cloud;
            };
        };
    }));

    $('.characterRow').on('click', '.Cid',(function(){
        if (heroSelected === false) {
        $('.Cloud').detach().appendTo('.rivalRow');
        $('.Cid').detach().appendTo('.heroRow');
        $('.Kefka').detach().appendTo('.rivalRow');
        $('.Vivi').detach().appendTo('.rivalRow');
        heroSelected = true;
        hero = cid;
        };
    }));

    $('.rivalRow').on('click', '.Cid', (function() {
        if (hero != cid) {
            if (rivalSelected === false) {
                $('.Cid').detach().appendTo('.fighterRow');
                rivalSelected = true;
                rival = cid;
            };
        };
    }));


    $('.characterRow').on('click', '.Kefka',(function(){
        if (heroSelected === false) {
        $('.Cloud').detach().appendTo('.rivalRow');
        $('.Cid').detach().appendTo('.rivalRow');
        $('.Kefka').detach().appendTo('.heroRow');
        $('.Vivi').detach().appendTo('.rivalRow');
        heroSelected = true;
        hero = hero;
        };
    }));

    $('.rivalRow').on('click', '.Kefka', (function() {
        if (hero != kefka) {
            if (rivalSelected === false) {
                $('.Kefka').detach().appendTo('.fighterRow');
                rivalSelected = true;
                rival = kefka;
            };
        };
    }));


    $('.characterRow').on('click', '.Vivi',(function(){
        if (heroSelected === false) {
        $('.Cloud').detach().appendTo('.rivalRow');
        $('.Cid').detach().appendTo('.rivalRow');
        $('.Kefka').detach().appendTo('.rivalRow');
        $('.Vivi').detach().appendTo('.ViviRow');
        heroSelected = true;
        hero = vivi;
        };
    }));

    $('.rivalRow').on('click', '.Vivi', (function() {
        if (hero != vivi) {
            if (rivalSelected === false) {
                $('.Vivi').detach().appendTo('.fighterRow');
                rivalSelected = true;
                rival = vivi;
            };
        };
    }));


    // $('.Cid').click(function(){
    //     if (heroSelected === false) {
    //     $('.Cloud').detach().appendTo('.rivalRow');
    //     $('.Cid').detach().appendTo('.HeroRow');
    //     $('.Kefka').detach().appendTo('.rivalRow');
    //     $('.Vivi').detach().appendTo('.rivalRow');
    //     heroSelected = true;
    //     hero = cid;
    //     };
    //     if (hero != cid) {
    //         if (rivalSelected === false) {
    //             $('.Cid').detach().appendTo('.fighterRow');
    //             rivalSelected = true;
    //             rival = cid;
    //         };
    //     };
    // });

    // $('.Kefka').click(function(){
    //     if (heroSelected === false) {
    //         $('.Cloud').detach().appendTo('.rivalRow');
    //         $('.Cid').detach().appendTo('.rivalRow');
    //         $('.Kefka').detach().appendTo('.heroRow');
    //         $('.Vivi').detach().appendTo('.rivalRow');
    //         heroSelected = true;
    //         hero = kefka;
    //     };
    //     if (hero != kefka) {
    //         if (rivalSelected === false) {
    //             $('.Kefka').detach().appendTo('.fighterRow');
    //             rivalSelected = true;
    //             rival = kefka;
    //         };
    //     };
    // });
    
    // $('.Vivi').click(function(){
    //     if (heroSelected === false) {
    //     $('.Cloud').detach().appendTo('.rivalRow');
    //     $('.Cid').detach().appendTo('.rivalRow');
    //     $('.Kefka').detach().appendTo('.rivalRow');
    //     $('.Vivi').detach().appendTo('.heroRow');
    //     heroSelected = true;
    //     hero = vivi;
    //     };
    //     if (hero != vivi) {
    //         if (rivalSelected === false) {
    //             $('.Vivi').detach().appendTo('.fighterRow');
    //             rivalSelected = true;
    //             rival = vivi;
    //         };
    //     };
    // });

    $('.fightButton').click(function(){
        if (rivalSelected === true) {
            fight(hero, rival);
        }
    })
});