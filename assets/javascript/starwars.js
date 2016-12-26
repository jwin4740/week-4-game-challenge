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
    function Character(name, hP, aP, cAP, id, num, imagesource, hpclass) {
        this.name = name;
        this.hP = hP;
        this.aP = aP;
        this.cAP = cAP;
        this.ele = '<div ' + id + 'class="player" data-value="' + num + '"><h4>' + this.name + '</h4><img class="pimage" src="assets/images/' + imagesource + '<h4 class=' + hpclass + '>' + this.hP +  '  hP</div>';
        this.class = hpclass;
    };


    var charOne = new Character("ObiwanKenobi", 175, 12, 15, 'id="obi" ', 1,  'obiwan.jpg">', 'obiclass');
    var charTwo = new Character("QuigonGinn", 200, 14, 20, 'id="qui" ', 2,  'quigon.jpeg">', 'quiclass');
    var charThree = new Character("CountDooku", 250, 16, 25, 'id="count" ', 3,  'countdooku.jpg">', 'countclass');
    var charFour = new Character("DarthMaul", 150, 18, 30, 'id="darth" ', 4, 'darthmaul.jpeg">', 'darthclass');

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
            $('.' + attacker.class).html(attacker.hP + " hP");
            $('.' + currentdefender.class).html(currentdefender.hP + " hP");
            console.log("attacker health is now : " + attacker.hP);
            console.log("currentdefender health is now: " + currentdefender.hP);
            $("#gamewindow").html("You attacked " + currentdefender.name + "for " + attacker.aP + " damage!!" + "<br>");
            $("#gamewindow").append(currentdefender.name + "attacked you for " + currentdefender.cAP +  " damage!!" + "<br>");
            $("#gamewindow").append("Your hP is now: " + attacker.hP + "<br>");
            $("#gamewindow").append(currentdefender.name + "'s hP is now: " + currentdefender.hP);
           
            if(currentdefender.hP <= 0)
            {
                $("#defenderbox").append("You have defeated your opponent!!! Choose your next opponent");
                checkpoint3 = false;
                checkpoint2 = false;

            }
            if(attacker.hP <= 0)
            {
                $("#defenderbox").append("You have been defeated!!!");
                checkpoint3 = false;
                checkpoint2 = false;
            }
        }

    });
    // --------------------------------------------------

});
