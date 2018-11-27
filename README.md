# unit-4-game
This assignment is for week 4.  JQuery stuff

I plan to make "Final Fantasy Arena"

In this game the player selects a character from a set of 4 options.  

Once the player has selected their option the other three become the "rivals" and move to the opposing side of the screen

The player must defeat all of their rivals to win the game

The player only fights characters one at a time

When the player "attacks" their chosen character deals its "attack damage" and increases its strength by the base "attack" amount
After the player attacks the enemy deals damage equal to its "counter damage." This counter damage doesn't increase

The player nor the "rivals" ever heal.

There must be a path for the player to win with each hero but not necesarily win each time with each hero

You must attack your rivals to see their "counter damage"

You can see each character's health on their portrait and it carries over between fights

There are several portions of the screen:
    - At the top there is the title of the game
    - Below that there is the character selection zone (all four characters sit here and you choose amongst them)
    - Under the character selection zone is the Hero zone (this is where your character goes when you select them)
    - Below the Hero zone is the Rival zone (Where the other characters go when you select your hero)
    - Below that sits the Fight zone
    - Inside the fight zone sits the defender (where the selected rival to fight goes) the attack button and the combat feed (what damage was dealt and if anyone was defeated)
    - If defeated or victorious the "restart button" shows up within the fight zone

PseudoCode:

- I need to make the screen and the elements on it
    - The images need to be div elements with both the picture as well as the name and health that we move the whole div rather than just the images
- The pictures in the "Character Select" zone need to have a function run when they click
    - this function makes the other pictures move to the "rival" zone and your picture move to the "hero" zone.
- Until the player selects a character nothing else should function
- After picking a character the player should be able to click any of the pictures in the "rival" zone to move only one of them to the "fight zone"
    - I think the player should be able to switch between the different characters to find the one they are strong against
    - this means the player can switch rivals during the fight
    - Probably add a boolean thing to trigger the fight button working in the function that moves a "rival" in
- Once there is a character in the fight zone then the player can click the attack button
    - Use that same boolean thing to switch off the fight button when an enemy is defeated
- Clicking attack needs to trigger a function that changes the enemy HP based upon the "hero's" attack, increase the "Hero's" attack, and, if the "rival" is still alive, deal the "rival's" counter attack to the "hero's" HP
- Clicking the attack also needs to send text to the "combat feed" based upon the damage dealt
    - Something like Hero + " dealt " + attackDamage + " to " + currentRival
    - and currentRival + " dealt " +counterDamage + " to " + hero
    - Add an if to show currentRival + " was defeated!" instead of the battle feed.
            QUESTION: 
                -Do the health and attack amounts need to be randomized?
                -If they do how do I guarantee that each hero is able to succeed?
                -possibly generate a single number randomly and base the other numbers off that number?
                -It feels randomized but isn't really then.  
                -More likely randomly assign different values to the characters rather than randomize all the values.  
                    -Like one is the high counter, two are medium counter, and one is low counter

Numbers thoughts:
- Three levels of counter attack: high, med, low
- assign the counter levels after hero is selected, thus only need three cases
Let's say perfect run takes 10 turns:
    -5 on easy fighter (dealing: a + 2a + 3a + 4a + 5a  between 11a and 15a to kill) (taking: 4c)
    -3 on med fighter  (dealing: 6a + 7a + 8a between 14a and 21a to kill) (taking: 6c)
    -2 on high fighter (dealing: 9a + 10a between 10a and 19a to kill) (taking 5c)

    Hero health minimum of 15c + something
This means that you take 4 low hits, 2 mid hits, and 1 high hit and need to survive for a perfect run

    "worst case" run would be: assuming minimum health amounts  
    You lose at these numbers
    - 1 hard hit (taking 5c dealing 1a)  9a health left
    - 1 medium hit (taking 3c dealing 2a) 12a health left
    - Hero at 3a attack and 8c health remains
    - 3 attack on easy (takes 2c and goes up to 6a)
    - Hero at 6c and 6a
    - 2 attack on medium (takes 3 c and goes up to 8a)
    - hero at 3c and 8a
    - 1 attack on hard and dies (hard almost dead)

    "worst case 2.0"
    - 1 medium hit (take 3c up to 2a) medium = 13a left
    - 1 hard hit (take 5c deal 2a) hard = 8a left
    - hero at 8c
    - 3 attack on easy (take 2c and incrase to 6a) hero at 6c

    Near worst case: assuming minimum health amounts
    - 1 hard hit (taking 5c dealing 1a)  9a health left hero at 11c
    - 4 attack on easy (takes 3c grow to 6a) hero at 8c
    - 3 attack on medium (take 6c grow to 9a) hero at 2c  (you lose if you got back to hard)
    - 1 hard hit and you win with 2c left

    near worst case 2.0:
    - 1 medium hit  (medium at 13a)
    - hero at 13c adn 2a
    - 4 attack on easy (take 3c adn grow to 6a)
    - Hero at 10c and 6a
    - 2 medium attacks (take 3c and grow to 9a)
    - Hero at 7c and 9a
    -2 hard attacks and you win at 2c


    
