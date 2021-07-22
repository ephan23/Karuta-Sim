let gas = 100;
let food = 50;
let thirst = 50;
let entertainment = 75;
let time = 100;

let action;

/* Gas */
$("#btnGas").click(function() {
    action = "Gas";
    performAction();
    gas = 100;

    $(".list-group").append('<li class="list-group-item">' + action + "</li>")
    updateProgress();
})

/* Taco */
$("#btnTaco").click(function() {
    action = "Taco";
    performAction();
    food += 60;

    if (food >= 100) {
        food = 100;
    }

    $(".list-group").append('<li class="list-group-item">' + action + "</li>")
    updateProgress();
})

/* Italian */
$("#btnItalian").click(function() {
    action = "Italian";
    performAction();
    food += 60;

    if (food >= 100) {
        food = 100;
    }

    $(".list-group").append('<li class="list-group-item">' + action + "</li>")
    updateProgress();
})

/* Sandwich */
$("#btnSandwich").click(function() {
    action = "Sandwich"
    performAction();
    food += 40;
    thirst += 20;

    if (food >= 100) {
        food = 100;
    }

    if (thirst >= 100) {
        thirst = 100;
    }

    $(".list-group").append('<li class="list-group-item">' + action + "</li>");
    updateProgress();
})

/* Fair */
$("#btnFair").click(function() {
    action = "Fair";
    performAction();
    entertainment += 40;
    food += 20;
    thirst += 20;

    if (food >= 100) {
        food = 100;
    }

    if (thirst >= 100) {
        thirst = 100;
    }

    if (entertainment >= 100) {
        entertainment = 100;
    }

    $(".list-group").append('<li class="list-group-item">' + action + "</li>");
    updateProgress();
})

/* Shopping */
$("#btnShopping").click(function() {
    action = "Shopping";
    performAction();
    
    $(".list-group").append('<li class="list-group-item">' + action + "</li>");
    console.log("30 AP added");
    updateProgress();
})

/* Juice */
$("#btnJuice").click(function() {
    action = "Juice";
    performAction();
    thirst += 60;

    if (thirst >= 100) {
        thirst = 100;
    }

    $(".list-group").append('<li class="list-group-item">' + action + "</li>");
    updateProgress();
})

/* Coffee */
$("#btnCoffee").click(function() {
    action = "Coffee";
    performAction();
    thirst += 60;

    if (thirst >= 100) {
        thirst = 100;
    }

    $(".list-group").append('<li class="list-group-item">' + action + "</li>");
    updateProgress();
})

/* Flower */
$("#btnFlower").click(function() {
    action = "Flower";
    performAction();
    entertainment = 100;

    $(".list-group").append('<li class="list-group-item">' + action + "</li>");
    updateProgress();
})

/* Nightclub */
$("#btnNightclub").click(function() {
    action = "Nightclub";
    performAction();
    thirst += 40;
    entertainment += 40;

    if (thirst >= 100) {
        thirst = 100;
    }
    
    if (entertainment >= 100) {
        entertainment = 100;
    }

    $(".list-group").append('<li class="list-group-item">' + action + "</li>");
    updateProgress();
})

/* Ring */
$("#btnRing").click(function() {
    action = "Ring";
    performAction();
    
    console.log("Proposal unlocked");
    $(".list-group").append('<li class="list-group-item">' + action + "</li>");
    updateProgress();
})

/* Theater */
$("#btnTheater").click(function() {
    action = "Theater";
    performAction();
    entertainment += 60;

    if (entertainment >= 100) {
        entertainment = 100;
    }

    $(".list-group").append('<li class="list-group-item">' + action + "</li>");
    updateProgress();
})

/* Airplane */
$("#btnAirplane").click(function() {
    action = "Airplane";
    performAction();
    entertainment -= 10;

    $(".list-group").append('<li class="list-group-item">' + action + "</li>");
    updateProgress();
})

/* House */
$("#btnHouse").click(function() {
    action = "House (End)";
    console.log("ended");
    $(".list-group").append('<li class="list-group-item">' + action + "</li>");
    updateProgress();
})

/* Buttons */
$("#btnUp").click(function() {
    action = "Up";
    gas -= 10;
    performAction();

    $(".list-group").append('<li class="list-group-item">' + action + "</li>");
    updateProgress();
})

$("#btnLeft").click(function() {
    action = "Left";
    gas -= 10;
    performAction();

    $(".list-group").append('<li class="list-group-item">' + action + "</li>");
    updateProgress();
})

$("#btnDown").click(function() {
    action = "Down";
    gas -= 10;
    performAction();

    $(".list-group").append('<li class="list-group-item">' + action + "</li>");
    updateProgress();
})
$("#btnRight").click(function() {
    action = "Right";
    gas -= 10;
    performAction();

    $(".list-group").append('<li class="list-group-item">' + action + "</li>");
    updateProgress();
})

/* Undo - NEEDS WORK*/
// $("#btnUndo").click(function() {
    
//     switch($('.list-group li:last-child').html()) {
//         case 'Gas':

//     }
    
//     $('.list-group li:last-child').remove();
// })

/* Reset */
$("#btnReset").click(function() {
    resetHandler();
})

function performAction() {
    food -= 4;
    thirst -= 6;
    entertainment -= 8;
    time -= 4;
}

function updateProgress() {

    if (gas <= 0 || food <= 0 || thirst <= 0 
        || entertainment <= 0 || time <= 0) {
            alert("Less than 0. Please reset.");
        }

    /* Gas BG Values */
    if (gas > 50) {
        $("#gasBar").removeClass("bg-warning");
        $("#gasBar").removeClass("bg-danger");
    }

    if (gas <= 50){
        $("#gasBar").addClass("bg-warning");
    }

    if (gas <= 25) {
        $("#gasBar").removeClass("bg-warning");
        $("#gasBar").addClass("bg-danger");
    }

    /* Food BG Values */
    if (food > 50) {
        $("#foodBar").removeClass("bg-warning");
        $("#foodBar").removeClass("bg-danger");
    }

    if (food <= 50){
        $("#foodBar").addClass("bg-warning");
    }

    if (food <= 25) {
        $("#foodBar").removeClass("bg-warning");
        $("#foodBar").addClass("bg-danger");
    }

    /* Thirst BG Values */
    if (thirst > 50) {
        $("#thirstBar").removeClass("bg-warning");
        $("#thirstBar").removeClass("bg-danger");
    }

    if (thirst <= 50){
        $("#thirstBar").addClass("bg-warning");
    }

    if (thirst <= 25) {
        $("#thirstBar").removeClass("bg-warning");
        $("#thirstBar").addClass("bg-danger");
    }

    /* Entertainment BG Values */
    if (entertainment > 50) {
        $("#entertainmentBar").removeClass("bg-warning");
        $("#entertainmentBar").removeClass("bg-danger");
    }

    if (entertainment <= 50){
        $("#entertainmentBar").addClass("bg-warning");
    }

    if (entertainment <= 25) {
        $("#entertainmentBar").removeClass("bg-warning");
        $("#entertainmentBar").addClass("bg-danger");
    }

    /* Time BG Values */
    if (time > 50) {
        $("#timeBar").removeClass("bg-warning");
        $("#timeBar").removeClass("bg-danger");
    }

    if (time <= 50){
        $("#timeBar").addClass("bg-warning");
    }

    if (time <= 25) {
        $("#timeBar").removeClass("bg-warning");
        $("#timeBar").addClass("bg-danger");
    }



    $("#gasBar").width(gas + "%");
    $("#gasBar").html(gas);

    $("#foodBar").width(food + "%");
    $("#foodBar").html(food);

    $("#thirstBar").width(thirst + "%");
    $("#thirstBar").html(thirst);

    $("#entertainmentBar").width(entertainment + "%");
    $("#entertainmentBar").html(entertainment);

    $("#timeBar").width(time + "%");
    $("#timeBar").html(time);

}

function resetHandler() {
    gas = 100;
    food = 50;
    thirst = 50;
    entertainment = 75;
    time = 100;

    updateProgress();
    $(".list-group").html("");

}