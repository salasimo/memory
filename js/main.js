// ****** Setting cards *******

orderCards = [];

for (let i = 1; i <= 8; ) {
    var rand = randomIntFromInterval(1, 9);
    if (!orderCards.includes(rand) && rand != 5) {
        orderCards.push(rand);
        i++;
    }
}

var randomCardsStyle =
    "'c" +
    orderCards[0] +
    " " +
    "c" +
    orderCards[1] +
    " " +
    "c" +
    orderCards[2] +
    "'" +
    " " +
    "'c" +
    orderCards[3] +
    " " +
    "c5" +
    " " +
    "c" +
    orderCards[4] +
    "'" +
    " " +
    "'c" +
    orderCards[5] +
    " " +
    "c" +
    orderCards[6] +
    " " +
    "c" +
    orderCards[7] +
    "'";

$(".game").css("grid-template-areas", randomCardsStyle);

function randomIntFromInterval(min, max) {
    // Random - min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// ******* In game *********

var status = 0;
var first = true;
var wait = false;
var firstCardType;
var secondCardType;
var firstCard;
var secondCard;

$(".card").on("click", function () {
    if (wait == false) {
        if ($(this).hasClass("flipped") || $(this).hasClass("done")) {
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
        firstCard.addClass("done");
        firstCard.removeClass("flipped");
        firstCard.find(".card-front").addClass("hidden");
        firstCard.find(".card-done").removeClass("hidden");
        secondCard.addClass("done");
        secondCard.removeClass("flipped");
        secondCard.find(".card-front").addClass("hidden");
        secondCard.find(".card-done").removeClass("hidden");
        wait = false;
    } else {
        firstCard.removeClass("flipped");
        secondCard.removeClass("flipped");
        wait = false;
    }
}
