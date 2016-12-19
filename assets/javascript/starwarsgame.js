//global variables
var quiCounter;
var darthCounter;
var countCounter;
var obiCounter;

var player = false;



$(document).ready(function() {
console.log(player);

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


    function fIntro() {
        $("#theme")[0].volume = 0.5;
        $("#theme")[0].play();
    }

    function fIntro2() {
        $("#theme2")[0].play();
    }

   
    function hoversound(){
        $("#hoversound")[0].volume = 0.6;
        $("#hoversound")[0].play();

    }
    function fDraw() {
        $("#saberdraw")[0].play();
    }


    function fBuzz() {
        $("#saberbuzz")[0].play();
    }

    function sBuzz() {
        $("#sabersbuzz")[0].play();
    }

    function fContact() {
        $("#sabercontact")[0].play();
    }

    function fSheath() {
        $("#sabersheath")[0].play();
    }

    function resetSound() {
        $("#saberbuzz")[0].pause();
        $("#sabersbuzz")[0].pause();
        $("#saberbuzz")[0].currentTime = 0;
        $("#sabersbuzz")[0].currentTime = 0;
    }

      function selectCharacter() {
        
            function hoverEnlarge(idname) {
                
                $(idname).on("mouseenter", function() {
                        $(idname).css({ border: "solid 5px yellow" });
                        hoversound();

                        $(idname).on("mouseleave", function() {
                            $(idname).css({ border: "solid 1px white" });

                        });
                    });
                }
            
                hoverEnlarge(qui);
                hoverEnlarge(darth);
                hoverEnlarge(obi);
                hoverEnlarge(count);
            }


    // lightsaber sound effects
    document.onkeyup = function(event) {
        var userKey = event.key;
        if (userKey === "d") {
            fDraw();
            setTimeout(fBuzz, 1000);
            setTimeout(sBuzz, 2000);
        }

        if (userKey === "s") {
            fContact();
        }


        if (userKey === "w") {
            fSheath();
        }

        if (userKey === "w") {
            setTimeout(fSheath, 500);
            resetSound();
        }
    };

    // makes player move with arrow keys
    $(document).keyup(function(e) {
        switch (e.which) {
            case 37:
                $("#obiwan").animate({ left: "-=50px" }, "normal");
        }
    });
    $(document).keyup(function(e) {
        switch (e.which) {
            case 38:
                $("#obiwan").animate({ top: "-=50px" }, "normal");
        }
    });

    $(document).keyup(function(e) {
        switch (e.which) {
            case 39:
                $("#obiwan").animate({ left: "+=50px" }, "normal");
        }
    });

    $(document).keyup(function(e) {
        switch (e.which) {
            case 40:
                $("#obiwan").animate({ top: "+=50px" }, "normal");

        }
    });

    // END OF FUNCTIONS 




    //--------------GAME STARTS---------------

   // fIntro();

    var qui = "#qui";
    var darth = "#darth";
    var obi = "#obi";
    var count = "#count";



selectCharacter();





    // function darthEnemy(){

    //     setInterval($(darth).remove();
    // }


    // fade arena in and out
    $("#arenabuttonin").on("click", function() {
        $("#arena:hidden:first").fadeIn(2000);
    });

    $("#arenabuttonout").on("click", function() {
        $("#arena").fadeOut(1000);
    });

function showPlayerObi() {
       $("#halfleft").append('<img class="playerselect" src="assets/images/obiwan.jpg">');
       $("#halfleft").css({display: "block"});
       $("#halfright").append('<img class="playerenemy" src="assets/images/darthmaul.jpeg">');
       $("#halfright").css({display: "block"});
       $("#halfright").append('<img class="playerenemy" src="assets/images/quigon.jpeg">');
       $("#halfright").css({display: "block"});
       $("#halfright").append('<img class="playerenemy" src="assets/images/countdooku.jpg">');
       $("#halfright").css({display: "block"});
      }

function showPlayerQui() {
       $("#halfleft").append('<img class="playerselect" src="assets/images/quigon.jpeg">');
       $("#halfleft").css({display: "block"});
       $("#halfright").append('<img class="playerenemy" src="assets/images/darthmaul.jpeg">');
       $("#halfright").css({display: "block"});
       $("#halfright").append('<img class="playerenemy" src="assets/images/obiwan.jpg">');
       $("#halfright").css({display: "block"});
       $("#halfright").append('<img class="playerenemy" src="assets/images/countdooku.jpg">');
       $("#halfright").css({display: "block"});
      }

function showPlayerCount() {
       $("#halfleft").append('<img class="playerselect" src="assets/images/countdooku.jpg">');
       $("#halfleft").css({display: "block"});
       $("#halfright").append('<img class="playerenemy" src="assets/images/darthmaul.jpeg">');
       $("#halfright").css({display: "block"});
       $("#halfright").append('<img class="playerenemy" src="assets/images/obiwan.jpg">');
       $("#halfright").css({display: "block"});
       $("#halfright").append('<img class="playerenemy" src="assets/images/quigon.jpeg">');
       $("#halfright").css({display: "block"});
      }

function showPlayerDarth() {
       $("#halfleft").append('<img class="playerselect" src="assets/images/darthmaul.jpeg">');
       $("#halfleft").css({display: "block"});
       $("#halfright").append('<img class="playerenemy" src="assets/images/quigon.jpeg">');
       $("#halfright").css({display: "block"});
       $("#halfright").append('<img class="playerenemy" src="assets/images/obiwan.jpg">');
       $("#halfright").css({display: "block"});
       $("#halfright").append('<img class="playerenemy" src="assets/images/countdooku.jpg">');
       $("#halfright").css({display: "block"});
      }


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
   
});
