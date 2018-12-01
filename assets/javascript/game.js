var cloud = {
    name: "Cloud",
    health: 252,
    startingHealth: 252,
    attack: 10,
    power: 10,
    counter: 20
};

var cid = {
    name: "Cid",
    health: 240,
    startingHealth: 240,
    attack: 9,
    power: 9,
    counter: 22
};

var kefka = {
    name: "Kefka",
    health: 210,
    startingHealth: 210,
    attack: 11,
    power: 11,
    counter: 30
};

var vivi = {
    name: "Vivi",
    health: 200,
    startingHealth: 200,
    attack: 12,
    power: 12,
    counter: 40
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
    var characterName = $('<h3>');
    characterName.appendTo(characterDiv);
    characterName.text(characterArray[num].name);
    var characterImage = $("<img class='characterImage' "+characterImageArray[num]);
    characterImage.appendTo(characterDiv);
    var characterHealth = $('<h3>');
    characterHealth.addClass(characterArray[num].name+"Health");
    characterHealth.appendTo(characterDiv);
    characterHealth.text(characterArray[num].startingHealth);
};

var resetGame = function() {
    hero.attack = hero.power;
    hero.health = hero.startingHealth;
    heroSelected = false;
    rivalSelected = false;
    victories = 0;
    $('.heroRow').empty();
    $('.rivalRow').empty();
    $('.fighterRow').empty();
    rivalAttack.text("");
    for (var i = 0; i < characterArray.length; i++) {
        createCharacterCard(i);
    }
};
var fight = function(player,cpu) {
    cpu.health = cpu.health - player.attack;
    $('.'+cpu.name+'Health').text(cpu.health);
    startingText.text("You dealt " + player.attack + " damage.  You can feel yourself growing stronger");
    player.attack = player.attack + player.power;
    if (cpu.health > 0){
        player.health = player.health - cpu.counter;
        if (player.health < 1) {
            cpu.health = cpu.startingHealth;
            resetGame();
            resetGameTitles();
            startingText.text("You have been Defeated! Try again if you dare")
        } else {
            rivalAttack.text(cpu.name + " dealt you a serious blow.  You took " + cpu.counter + " damage.")
            $('.'+player.name+'Health').text(player.health);
        };
    } else {
        $("."+cpu.name).detach();
        victories++;
        rivalSelected = false;
        rivalAttack.text("");
        cpu.health = cpu.startingHealth
        if (victories < 3){
        startingText.text("You are victorious, select your next rival");
        } else {
            resetGame();
            resetGameTitles();
            startingText.text("Congratulations, you survived the Arena, try with a different character if you dare.");
        }
    }
};

var gameStartTitleToggle = function() {
    $('.selectRow').css({'display':"none"});
    $('.gameStartTitles').css({'display':"inline-block"});
    startingText.text("You've selected "+ hero.name + ". Now choose your first rival to fight");
};

var enterArena = function() {
    $('.rivalSelectText').css({'display':"inline-block"});
    if (victories === 0) {
        startingText.text("Now you're ready to battle.  Click the fight button to throw down with " + rival.name);
    } else if (victories === 1) {
        startingText.text("Click the fight button to duke it out with " + rival.name);
    } else if (victories === 2) {
        startingText.text("This is the final bout!  One more victory and you've won it all!  Good luck.");
    }
};

var resetGameTitles = function() {
    $('.selectRow').css({'display':"inline-block"});
    $('.gameStartTitles').css({'display':"none"});
    $('.rivalSelectText').css({'display':"none"});
    
}

$(document).ready(function() {
    
    for (var i = 0; i < characterArray.length; i++) {
        createCharacterCard(i);
    }
    
    $('.combatFeed').append(startingText).append(rivalAttack);
    startingText.text("Select your Hero and first rival");

    $('.characterRow').on('click', '.Cloud',(function(){
        if (heroSelected === false) {
        $('.Cloud').detach().appendTo('.heroRow').css({"background-color": "rgba(0, 255, 0, 0.2"});
        $('.Cid').detach().appendTo('.rivalRow').css({"background-color": "rgba(65, 65, 65, 0.2"});
        $('.Kefka').detach().appendTo('.rivalRow').css({"background-color": "rgba(65, 65, 65, 0.2"});
        $('.Vivi').detach().appendTo('.rivalRow').css({"background-color": "rgba(65, 65, 65, 0.2"});
        heroSelected = true;
        hero = cloud;
        gameStartTitleToggle();
        };
    }));

    $('.rivalRow').on('click', '.Cloud', (function() {
        if (hero != cloud) {
            if (rivalSelected === false) {
                $('.Cloud').detach().appendTo('.fighterRow').css({"background-color": "rgba(255, 0, 0, 0.2"});
                rivalSelected = true;
                rival = cloud;
                enterArena();
            };
        };
    }));

    $('.characterRow').on('click', '.Cid',(function(){
        if (heroSelected === false) {
        $('.Cloud').detach().appendTo('.rivalRow').css({"background-color": "rgba(65, 65, 65, 0.2"});
        $('.Cid').detach().appendTo('.heroRow').css({"background-color": "rgba(0, 255, 0, 0.2"});
        $('.Kefka').detach().appendTo('.rivalRow').css({"background-color": "rgba(65, 65, 65, 0.2"});
        $('.Vivi').detach().appendTo('.rivalRow').css({"background-color": "rgba(65, 65, 65, 0.2"});
        heroSelected = true;
        hero = cid;
        gameStartTitleToggle();
        };
    }));

    $('.rivalRow').on('click', '.Cid', (function() {
        if (hero != cid) {
            if (rivalSelected === false) {
                $('.Cid').detach().appendTo('.fighterRow').css({"background-color": "rgba(255, 0, 0, 0.2"});
                rivalSelected = true;
                rival = cid;
                enterArena();
            };
        };
    }));

    $('.characterRow').on('click', '.Kefka',(function(){
        if (heroSelected === false) {
        $('.Cloud').detach().appendTo('.rivalRow').css({"background-color": "rgba(65, 65, 65, 0.2"});
        $('.Cid').detach().appendTo('.rivalRow').css({"background-color": "rgba(65, 65, 65, 0.2"});
        $('.Kefka').detach().appendTo('.heroRow').css({"background-color": "rgba(0, 255, 0, 0.2"});
        $('.Vivi').detach().appendTo('.rivalRow').css({"background-color": "rgba(65, 65, 65, 0.2"});
        heroSelected = true;
        hero = kefka;
        gameStartTitleToggle();
        };
    }));

    $('.rivalRow').on('click', '.Kefka', (function() {
        if (hero != kefka) {
            if (rivalSelected === false) {
                $('.Kefka').detach().appendTo('.fighterRow').css({"background-color": "rgba(255, 0, 0, 0.2"});
                rivalSelected = true;
                rival = kefka;
                enterArena();
            };
        };
    }));

    $('.characterRow').on('click', '.Vivi',(function(){
        if (heroSelected === false) {
        $('.Cloud').detach().appendTo('.rivalRow').css({"background-color": "rgba(65, 65, 65, 0.2"});
        $('.Cid').detach().appendTo('.rivalRow').css({"background-color": "rgba(65, 65, 65, 0.2"});
        $('.Kefka').detach().appendTo('.rivalRow').css({"background-color": "rgba(65, 65, 65, 0.2"});
        $('.Vivi').detach().appendTo('.heroRow').css({"background-color": "rgba(0, 255, 0, 0.2"});
        heroSelected = true;
        hero = vivi;
        gameStartTitleToggle();
        };
    }));

    $('.rivalRow').on('click', '.Vivi', (function() {
        if (hero != vivi) {
            if (rivalSelected === false) {
                $('.Vivi').detach().appendTo('.fighterRow').css({"background-color": "rgba(255, 0, 0, 0.2"});
                rivalSelected = true;
                rival = vivi;
                enterArena();
            };
        };
    }));

    $('.fightButton').click(function(){
        if (rivalSelected === true) {
            fight(hero, rival);
        }
    })
});