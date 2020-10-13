//Set random cards order
rand = Math.floor(Math.random() * 10);
shakeCards(rand);

function shakeCards(rand) {
    switch (rand) {
        case 0:
            $(".game").css({
                "grid-template-areas": '"c2 c4 c9" "c6 c5 c1" "c3 c7 c8"',
            });
            break;
        case 1:
            $(".game").css({
                "grid-template-areas": '"c1 c3 c9" "c8 c5 c2" "c4 c6 c7"',
            });
            break;
        case 2:
            $(".game").css({
                "grid-template-areas": '"c3 c2 c4" "c9 c5 c1" "c6 c7 c8"',
            });
            break;
        case 3:
            $(".game").css({
                "grid-template-areas": '"c8 c4 c9" "c1 c5 c7" "c2 c6 c3"',
            });
            break;
        case 4:
            $(".game").css({
                "grid-template-areas": '"c1 c2 c9" "c3 c5 c4" "c7 c8 c6"',
            });
            break;
        case 5:
            $(".game").css({
                "grid-template-areas": '"c6 c1 c2" "c4 c5 c9" "c7 c3 c8"',
            });
            break;
        case 6:
            $(".game").css({
                "grid-template-areas": '"c8 c3 c1" "c2 c5 c9" "c4 c7 c6"',
            });
            break;
        case 7:
            $(".game").css({
                "grid-template-areas": '"c1 c2 c4" "c7 c5 c6" "c3 c9 c8"',
            });
            break;
        case 8:
            $(".game").css({
                "grid-template-areas": '"c6 c2 c9" "c8 c5 c3" "c7 c1 c4"',
            });
            break;
        case 9:
            $(".game").css({
                "grid-template-areas": '"c7 c1 c6" "c8 c5 c2" "c3 c9 c4"',
            });
            break;
    }
}

var status = 0;
var first = true;
var wait = false;
var firstCardType;
var secondCardType;
var firstCard;
var secondCard;

$(".card").on("click", function () {
    if (wait == false) {
        if ($(this).hasClass("flipped")) {
            return;
        }

        $(this).toggleClass("flipped");

        if (first) {
            firstCard = $(this);
            firstCardType = $(this).attr("game");
            first = false;
        } else {
            secondCard = $(this);
            secondCardType = $(this).attr("game");
            wait = true;
            first = true;

            setTimeout(function () {
                checkGame();
            }, 2000);
        }
    }
});

function checkGame() {
    if (firstCardType == secondCardType) {
        status++;
        wait = false;
    } else {
        firstCard.removeClass("flipped");
        secondCard.removeClass("flipped");
        wait = false;
    }
}
