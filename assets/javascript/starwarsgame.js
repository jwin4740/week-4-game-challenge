//global variables
var quiCounter;
var darthCounter;
var countCounter;
var obiCounter;

var player;

var clicked = true;

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


    function fIntro() {
        $("#theme")[0].play();
    }

    function fIntro2() {
        $("#theme2")[0].play();
    }

    function lessVolume() {
        $("#theme")[0].volume = 0.5;
    }
    lessVolume();


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

    // $("#qui").on("click", function(){
    // alert("The paragraph was clicked.");

    var qui = "#qui";
    var darth = "#darth";
    var obi = "#obi";
    var count = "#count";


    // function selectCharacter() {
    //     if (clicked === true) {
    //         function hoverEnlarge(idname) {
    //             console.log(clicked);


    //             $(idname).on("mouseenter", function() {
    //                     $(idname).css({ height: "275px", width: "275px" });
    //                     console.log(clicked);


    //                     $(idname).on("mouseleave", function() {
    //                         $(idname).css({ height: "200px", width: "200px" });

    //                     });
    //                 });
    //             }
    //         }
    //             hoverEnlarge(qui);
    //             hoverEnlarge(darth);
    //             hoverEnlarge(obi);
    //             hoverEnlarge(count);
    //         }

    //         selectCharacter();





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


    $("#go").click(function() {
        $(".lightsaber").animate({
            height: "180px",

        }, 1500);
        $(".lightsaber").css({
            border: "solid 4px green",

        }, 1500);
    });

    $(qui).on("click", function() {
        {
            clicked = false;
            console.log(clicked);
            $(darth).fadeOut(1000);
            $(count).fadeOut(1000);
            $(obi).fadeOut(1000);
        }
        $(qui).attr("class", "clicked");
        // $(qui).removeAttr( "class", "player" );


    });
    // $(qui).animate({ height: "300px", width: "300px" }, 3000);
    $(darth).on("click", function() {

        $("div").blur();

    });
    $(count).on("click", function() {
        $(count).css({ border: "solid 8px green" });
        $(darth).remove();
        $(qui).remove();
        $(obi).remove();
    });
    $(obi).on("click", function() {
        $(obi).css({ border: "solid 8px green" });
        $(darth).remove();
        $(count).remove();
        $(qui).remove();
    });


    console.log(clicked);
    //  qui.on("click", clickit(qui) );
    //  obi.on("click",  );
    //  darth.on("click",  );
    //  count.on("click",  );

    //      function clickit(x) {
    //          $(x).css({ border: "solid 8px green" });
    //      }



    // var countdown;
    // function startCountdown()
    // var countdown = setInterval(decrement, 1000);
});
