//global variables
var quiCounter;
var darthCounter;
var countCounter;
var obiCounter;
var characterArray = [];
var idArray = [];
var proceed = false;
var obiAttacker = false;
var quiAttacker = false;
var countAttacker = false;
var darthAttacker = false;
var attacker;


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

    var obi = "#forceobi";
    var qui = "#forcequi";
    var count = "#forcecount";
    var darth = "#forcedarth";

    var playerone = "#playerone";
    var playertwo = "#playertwo";
    var playerthree = "#playerthree";
    var playerfour = "#playerfour";
    var startplayerid = "div[id^='player']";



    idArray.push(playerone);
    idArray.push(playertwo);
    idArray.push(playerthree);
    idArray.push(playerfour);
    console.log(idArray);

    //--------------GAME STARTS---------------

    //give data attributes to playerdivs

    $(playerone).attr("data-name", charOne.name).attr("data-hp", charOne.healthPoints).attr("data-ap", charOne.attackPower).attr("data-cap", charOne.counterAttackPower);
    $(playertwo).attr("data-name", charTwo.name).attr("data-hp", charTwo.healthPoints).attr("data-ap", charTwo.attackPower).attr("data-cap", charTwo.counterAttackPower);
    $(playerthree).attr("data-name", charThree.name).attr("data-hp", charThree.healthPoints).attr("data-ap", charThree.attackPower).attr("data-cap", charThree.counterAttackPower);
    $(playerfour).attr("data-name", charFour.name).attr("data-hp", charFour.healthPoints).attr("data-ap", charFour.attackPower).attr("data-cap", charFour.counterAttackPower);






    fIntro();



    console.log("got here");
    console.log(charOne.healthPoints);
    // when the user clicks a character it give all the enemies the class of "enemy"
    console.log("proceed is: " + proceed);
    
    

    $("#choose").on("click", function chooseAttacker() {
        console.log("proceed is: " + proceed);
        selectCharacter();
        // you chose obiwan as your attacker
        $(playerone).click(function() {
            $(this).addClass("attacker");
            $(idArray[1]).addClass("enemy");
            $(idArray[2]).addClass("enemy");
            $(idArray[3]).addClass("enemy");
            attacker = charOne;

        });

        // you chose quigonn as your attacker
        $(playertwo).click(function() {
            $(this).addClass("attacker");
            $(idArray[0]).addClass("enemy");
            $(idArray[2]).addClass("enemy");
            $(idArray[3]).addClass("enemy");
            console.log($(playerone).attr("class"));
        });

        // you chose countdooku as your attacker
        $(playerthree).click(function() {
            $(this).addClass("attacker");
            $(idArray[1]).addClass("enemy");
            $(idArray[0]).addClass("enemy");
            $(idArray[3]).addClass("enemy");
            console.log($(playerone).attr("class"));
        });

        // you chose darthmaul as your attacker
        $(playerfour).click(function() {
            $(this).addClass("attacker");
            $(idArray[1]).addClass("enemy");
            $(idArray[2]).addClass("enemy");
            $(idArray[0]).addClass("enemy");
            console.log($(playerone).attr("class"));
        });
        console.log("proceed is: " + proceed);
        proceed = true;
        console.log("proceed is: " + proceed);
        $(startplayerid).on("click", function() {

            $(startplayerid).fadeOut(1000);
            setTimeout(showPlayerObi, 1000);
            
        });

    });
    console.log("proceed is: " + proceed);

    if(proceed === true)
    {
        console.log("yeah it is truedasdfs");
    }
    else
    {
        console.log("it aint");
    }

    // whichever character is clicked all will dissapear


    // $(qui).on("click", function() {

    //     $(qui).fadeOut(1000);
    //     $(darth).fadeOut(1000);
    //     $(count).fadeOut(1000);
    //     $(obi).fadeOut(1000);
    //     setTimeout(showPlayerQui, 1000);

    // });

    // $(count).on("click", function() {

    //     $(qui).fadeOut(1000);
    //     $(darth).fadeOut(1000);
    //     $(count).fadeOut(1000);
    //     $(obi).fadeOut(1000);
    //     setTimeout(showPlayerCount, 1000);
    // });

    // $(darth).on("click", function() {

    //     $(qui).fadeOut(1000);
    //     $(darth).fadeOut(1000);
    //     $(count).fadeOut(1000);
    //     $(obi).fadeOut(1000);
    //     setTimeout(showPlayerDarth, 1000);
    // });
    // console.log(player);

    // if (player === true) {
    //     console.log("yeah its true!!!")
    // }


});
