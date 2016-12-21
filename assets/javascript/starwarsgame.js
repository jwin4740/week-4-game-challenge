//global variables
var quiCounter;
var darthCounter;
var countCounter;
var obiCounter;
var characterArray = [];
var player = false;



$(document).ready(function() {


    // DEFINING FUNCTIONS AND OBJECTS go to line xx to see how game starts


    // prototype object
    function Character(name, healthPoints, attackPower, counterAttackPower) {
        this.name = name;
        this.healthPoints = healthPoints;
        this.attackPower = attackPower;
        this.counterAttackPower = counterAttackPower;
    }

    var charOne = new Character("ObiwanKenobi", 175, 12, 15);
    var charTwo = new Character("QuigonGinn", 200, 14, 20);
    var charThree = new Character("CountDooku", 250, 16, 25);
    var charFour = new Character("DarthMaul", 150, 18, 30);
    
     //fill character array
    characterArray.push(charOne);
    characterArray.push(charTwo);
    characterArray.push(charThree);
    characterArray.push(charFour);

    console.log(characterArray);

    //--------------GAME STARTS---------------


    
    var qui = "#qui";
    var darth = "#darth";
    var obi = "#obi";
    var count = "#count";


    console.log(player);
    selectCharacter();
    fIntro();


$(document).on("click", function(event) {
        if($(event.target).is("#playerdiv"))
        {
            console.log("score got it");
        }
        else
        {
            console.log("random");
        }
    });



    $(obi).on("click", function() {

        $(qui).fadeOut(1000);
        $(darth).fadeOut(1000);
        $(count).fadeOut(1000);
        $(obi).fadeOut(1000);
        setTimeout(showPlayerObi, 1000);
    });

    $(qui).on("click", function() {

        $(qui).fadeOut(1000);
        $(darth).fadeOut(1000);
        $(count).fadeOut(1000);
        $(obi).fadeOut(1000);
        setTimeout(showPlayerQui, 1000);

    });

    $(count).on("click", function() {

        $(qui).fadeOut(1000);
        $(darth).fadeOut(1000);
        $(count).fadeOut(1000);
        $(obi).fadeOut(1000);
        setTimeout(showPlayerCount, 1000);
    });

    $(darth).on("click", function() {

        $(qui).fadeOut(1000);
        $(darth).fadeOut(1000);
        $(count).fadeOut(1000);
        $(obi).fadeOut(1000);
        setTimeout(showPlayerDarth, 1000);
    });
    console.log(player);

    if (player === true) {
        console.log("yeah its true!!!")
    }


});
