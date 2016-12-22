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
var obiElement = '<div id="playerbox"><div class="playerdiv" id="playerone"><p>Obi-wan Kenobi 175 HP</p><img class="player" src="assets/images/obiwan.jpg"></div>';
var quiElement = '<div class="playerdiv" id="playertwo"><p>Qui-gon Ginn175 HP</p><img class="player" src="assets/images/quigon.jpeg"></div>';
var countElement = '<div class="playerdiv" id="playerthree"><p>Count Dooku 175 HP</p><img class="player" src="assets/images/countdooku.jpg"></div>';
var darthElement = '<div class="playerdiv" id="playerfour"><p>Darth Maul 175 HP</p><img class="player" src="assets/images/darthmaul.jpeg"></div>';
var defender1;
var defender2;
var defender3;
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
            attacker = obiElement;
            defender1 = quiElement;
            defender2 = countElement;
            defender3 = darthElement;

            console.log(attacker);

        });

        // you chose quigonn as your attacker
        $(playertwo).click(function() {
            $(this).addClass("attacker");
            attacker = quiElement;
            defender1 = obiElement;
            defender2 = countElement;
            defender3 = darthElement;
            
            $(idArray[0]).addClass("enemy");
            $(idArray[2]).addClass("enemy");
            $(idArray[3]).addClass("enemy");
            
            console.log(attacker);
        });

        // you chose countdooku as your attacker
        $(playerthree).click(function() {
            $(this).addClass("attacker");
            $(idArray[1]).addClass("enemy");
            $(idArray[0]).addClass("enemy");
            $(idArray[3]).addClass("enemy");
            attacker = countElement;
            defender1 = obiElement;
            defender2 = quiElement;
            defender3 = darthElement;
            console.log(attacker);
        });

        // you chose darthmaul as your attacker
        $(playerfour).click(function() {
            $(this).addClass("attacker");
            $(idArray[1]).addClass("enemy");
            $(idArray[2]).addClass("enemy");
            $(idArray[0]).addClass("enemy");
            attacker = darthElement;
            defender1 = obiElement;
            defender2 = quiElement;
            defender3 = countElement;
            console.log(attacker);
        });
        console.log("proceed is: " + proceed);
       
        console.log("proceed is: " + proceed);
        $(startplayerid).on("click", function() {

            $(startplayerid).fadeOut(1000);
            setTimeout(showPlayerObi, 1000);
            
        });
        proceed = true;
    });
    console.log("proceed is: " + proceed);


    $("#frame1").on("click", function (event){
        if (proceed === true)
        {
            $("#stageset").css({float: "left", border: "solid 2px white", width: "100%", height: "250px"});
            $("#enemyondeck").css({float: "left", border: "solid 2px white", width: "100%", height: "250px"});
            $("#attacker").html(attacker);
            $("#enemyondeck").html(defender1);
            $("#enemyondeck").append(defender2);
            $("#enemyondeck").append(defender3);

        }
        else
        {
            console.log("no non no");
        }
   
        
    
});
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
