


function fIntro() {
        $("#theme")[0].volume = 0.5;
        $("#theme")[0].play();
    }

    function fIntro2() {
        $("#theme2")[0].play();
    }

    function showArena() {
        $("#arena:hidden:first").fadeIn(2000);
    }

    function hoversound() {
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
                $(idname).addClass("hover");
                hoversound();

                $(idname).on("mouseleave", function() {
                    $(idname).removeClass("hover");

                });
            });
        }

        hoverEnlarge("#playerone");
        hoverEnlarge("#playertwo");
        hoverEnlarge("#playerthree");
        hoverEnlarge("#playerfour");
    }

     // makes player move with arrow keys
    $(document).keyup(function(e) {
        switch (e.which) {
            case 37:
                $(".obiwan").animate({ left: "-=50px" }, "normal");
        }
    });
    $(document).keyup(function(e) {
        switch (e.which) {
            case 38:
                $(".obiwan").animate({ top: "-=50px" }, "normal");
        }
    });

    $(document).keyup(function(e) {
        switch (e.which) {
            case 39:
                $(".obiwan").animate({ left: "+=50px" }, "normal");
        }
    });

    $(document).keyup(function(e) {
        switch (e.which) {
            case 40:
                $(".obiwan").animate({ top: "+=50px" }, "normal");

        }
    });


function showPlayerObi() {
        $("#halfleft").append('<img class="playerselect" src="assets/images/obiwan.jpg">');
        $("#halfleft").css({ display: "block" });
        $("#halfright").append('<img class="playerenemy" src="assets/images/darthmaul.jpeg">');
        $("#halfright").css({ display: "block" });
        $("#halfright").append('<img class="playerenemy" src="assets/images/quigon.jpeg">');
        $("#halfright").css({ display: "block" });
        $("#halfright").append('<img class="playerenemy" src="assets/images/countdooku.jpg">');
        $("#halfright").css({ display: "block" });
        $("#playerbox").empty();
        player = true;
        console.log(player);
        if (player === true) {
            console.log(player);
            
        }
    }


    function showPlayerQui() {
        $("#halfleft").append('<img class="playerselect" src="assets/images/quigon.jpeg">');
        $("#halfleft").css({ display: "block" });
        $("#halfright").append('<img class="playerenemy" src="assets/images/darthmaul.jpeg">');
        $("#halfright").css({ display: "block" });
        $("#halfright").append('<img class="playerenemy" src="assets/images/obiwan.jpg">');
        $("#halfright").css({ display: "block" });
        $("#halfright").append('<img class="playerenemy" src="assets/images/countdooku.jpg">');
        $("#halfright").css({ display: "block" });
        player = true;
        console.log(player);
        if (player === true) {
            console.log(player);
           
        }
    }

    function showPlayerCount() {
        $("#halfleft").append('<img class="playerselect" src="assets/images/countdooku.jpg">');
        $("#halfleft").css({ display: "block" });
        $("#halfright").append('<img class="playerenemy" src="assets/images/darthmaul.jpeg">');
        $("#halfright").css({ display: "block" });
        $("#halfright").append('<img class="playerenemy" src="assets/images/obiwan.jpg">');
        $("#halfright").css({ display: "block" });
        $("#halfright").append('<img class="playerenemy" src="assets/images/quigon.jpeg">');
        $("#halfright").css({ display: "block" });
        player = true;
        console.log(player);
        if (player === true) {
            console.log(player);
            
        }
    }

    function showPlayerDarth() {
        $("#halfleft").append('<img class="playerselect" src="assets/images/darthmaul.jpeg">');
        $("#halfleft").css({ display: "block" });
        $("#halfright").append('<img class="playerenemy" src="assets/images/quigon.jpeg">');
        $("#halfright").css({ display: "block" });
        $("#halfright").append('<img class="playerenemy" src="assets/images/obiwan.jpg">');
        $("#halfright").css({ display: "block" });
        $("#halfright").append('<img class="playerenemy" src="assets/images/countdooku.jpg">');
        $("#halfright").css({ display: "block" });
        player = true;
        console.log(player);
        $("#arena").append('<img class="playerselect" src="assets/images/darthmaul.jpeg">');
        if (player === true) {
            console.log(player);
          
        }
    }


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