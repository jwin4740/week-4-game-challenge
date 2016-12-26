//global variables


var cArray = [];
var attacker;
var currentdefender;
var defender1, defender2, defender3;
var checkpoint1 = false;
var checkpoint2 = false;
var checkpoint3 = false;
var tempval;




$(document).ready(function() {

function fIntro() {
        $("#theme")[0].volume = 0.5;
        $("#theme")[0].play();
    }
    // DEFINING FUNCTIONS AND OBJECTS go to line xx to see how game starts


    // prototype object
    function Character(name, hP, aP, cAP, id, num, nameheader, imagesource) {
        this.name = name;
        this.hP = hP;
        this.aP = aP;
        this.cAP = cAP;
        this.ele = '<div ' + id + 'class="player" data-value="' + num + '"><h4>' + nameheader + '</h4><img class="pimage" src="assets/images/' + imagesource + '</div>';
    };


    var charOne = new Character("ObiwanKenobi", 175, 12, 15, 'id="obi" ', 1, 'Obi-wan Kenobi', 'obiwan.jpg">');
    var charTwo = new Character("QuigonGinn", 200, 14, 20, 'id="qui" ', 2, 'Qui-gon Ginn', 'quigon.jpeg">');
    var charThree = new Character("CountDooku", 250, 16, 25, 'id="count" ', 3, 'Count Dooku', 'countdooku.jpg">');
    var charFour = new Character("DarthMaul", 150, 18, 30, 'id="darth" ', 4, 'Darth Maul', 'darthmaul.jpeg">');

    //fill character array
    cArray.push(charOne);
    cArray.push(charTwo);
    cArray.push(charThree);
    cArray.push(charFour);
    console.log(cArray);




    // user chooses their player which appends to the attacker box, while the remaining players get appended
    // to the defenderondeck box
    function setup() {
        $("#choosebox").append(charOne.ele).append(charTwo.ele).append(charThree.ele).append(charFour.ele);
    }


    setup();
    fIntro();

    $('.player').on("click", function() {
        if (!checkpoint1) {
            $(this).siblings().addClass("defender").appendTo("#defenderondeckbox");
            $(this).addClass("attacker").appendTo("#attackerbox");

            tempval = $(this).attr("data-value");
            attacker = cArray[tempval - 1];
            console.log(attacker);
            checkpoint1 = true;

        }
    });

    $("#defenderondeckbox").on("click", ".player.defender", function() {
        if (!checkpoint2) {
            $("#defenderbox").html(this);
            tempval = $(this).attr("data-value");
            currentdefender = cArray[tempval - 1];
            currentdefender.hP = cArray[tempval - 1].hP;
            console.log(currentdefender.hP);

            console.log(currentdefender);
            checkpoint2 = true;
            $("#defenderbox").append();
            checkpoint3 = true;
    }
});

    $(".confirmbutton").on("click", function() {
        if (checkpoint3)
        {
            
            currentdefender.hP = currentdefender.hP - attacker.aP;
            attacker.aP = attacker.aP + 15;
            attacker.hP = attacker.hP - currentdefender.cAP;

            console.log("attacker health is now : " + attacker.hP);
            console.log("currentdefender health is now: " + currentdefender.hP);
            $("#gamewindow").html("You attacked " + currentdefender.name + "for " + attacker.aP + " damage!!" + "<br>");
            $("#gamewindow").append(currentdefender.name + "attacked you for " + currentdefender.cAP +  " damage!!" + "<br>");
            $("#gamewindow").append("Your hP is now: " + attacker.hP + "<br>");
            $("#gamewindow").append(currentdefender.name + "'s hP is now: " + currentdefender.hP);
           
            if(currentdefender.hP <= 0)
            {
                $("#defenderbox").append("You have defeated your opponent!!! Choose your next opponent");
                checkpoint2 = false;

            }
            else if(attacker.hP <= 0)
            {
                $("#defenderbox").append("You have been defeated!!!");
            }
        }

    });
    // --------------------------------------------------

});
