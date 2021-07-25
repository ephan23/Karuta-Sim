let action;

let gas = [100];
let food = [50];
let thirst = [50];
let entertainment = [75];
let time = [100];


/* Gas */
$("#btnGas").click(function() {
    action = "Gas";
    performAction(action);
    updateProgress();
})

/* Taco */
$("#btnTaco").click(function() {
    action = "Taco";
    performAction(action);
    updateProgress();
})

/* Italian */
$("#btnItalian").click(function() {
    action = "Italian";
    performAction(action);
    updateProgress();
})

/* Sandwich */
$("#btnSandwich").click(function() {
    action = "Sandwich"
    performAction(action);
    updateProgress();
})

/* Fair */
$("#btnFair").click(function() {
    action = "Fair";
    performAction(action);
    updateProgress();
})

/* Shopping */
$("#btnShopping").click(function() {
    action = "Shopping";
    performAction(action);
    console.log("30 AP added");
    updateProgress();
})

/* Juice */
$("#btnJuice").click(function() {
    action = "Juice";
    performAction(action);
    updateProgress();
})

/* Coffee */
$("#btnCoffee").click(function() {
    action = "Coffee";
    performAction(action);
    updateProgress();
})

/* Flower */
$("#btnFlower").click(function() {
    action = "Flower";
    performAction(action);
    updateProgress();
})

/* Nightclub */
$("#btnNightclub").click(function() {
    action = "Nightclub";
    performAction(action);
    updateProgress();
})

/* Ring */
$("#btnRing").click(function() {
    action = "Ring";
    performAction(action); 
    console.log("Proposal unlocked");
    updateProgress();
})

/* Theater */
$("#btnTheater").click(function() {
    action = "Theater";
    performAction(action);
    updateProgress();
})

/* Ballroom */
$("#btnBallroom").click(function() {
    action = "Ballroom";
    performAction(action);
    updateProgress();
})

/* Airplane */
$("#btnAirplane").click(function() {
    action = "Airplane";
    performAction(action);
    updateProgress();
})

/* House */
$("#btnHouse").click(function() {
    action = "House (End)";
    console.log("ended");
    performAction(action);
    updateProgress();
})

/* Buttons */
$("#btnUp").click(function() {
    action = "Up";
    performAction(action);
    updateProgress();
})

$("#btnLeft").click(function() {
    action = "Left";
    performAction(action);
    updateProgress();
})

$("#btnDown").click(function() {
    action = "Down";
    performAction(action);
    updateProgress();
})
$("#btnRight").click(function() {
    action = "Right";
    performAction(action);
    updateProgress();
})

/* Undo */
$("#btnUndo").click(function() {
    if (time.length > 1) {
        gas.pop();
        food.pop();
        thirst.pop();
        entertainment.pop();
        time.pop();

        updateProgress();

        $('.list-group li:last-child').remove();
        $('.list-group-item.active').removeClass("active");
        $('.list-group li:last-child').addClass("active");
    }
})

/* Reset */
$("#btnReset").click(function() {
    resetHandler();
})

$(document).on("click", ".list-group-item", function() {
    let i = $(this).index() + 1;

    $('.list-group-item.active').removeClass("active");
    $(this).toggleClass("active");
        
    updateValues(i);

    $("#gasBar").width(gas[i] + "%");
    $("#gasBar").html(gas[i]);

    $("#foodBar").width(food[i] + "%");
    $("#foodBar").html(food[i]);

    $("#thirstBar").width(thirst[i] + "%");
    $("#thirstBar").html(thirst[i]);

    $("#entertainmentBar").width(entertainment[i] + "%");
    $("#entertainmentBar").html(entertainment[i]);

    $("#timeBar").width(time[i] + "%");
    $("#timeBar").html(time[i]);
})

function performAction(action) {
    gas.push(gas[gas.length - 1]);
    food.push(food[food.length - 1] - 4);
    thirst.push(thirst[thirst.length - 1] - 6);
    entertainment.push(entertainment[entertainment.length - 1] - 8);
    time.push(time[time.length - 1] - 4);

    switch (action) {
        case "Up":
        case "Left":
        case "Down":
        case "Right":
            gas[gas.length - 1] -= 10;
            break;

        case "Gas":
            gas[gas.length - 1] += 100;
            checkValue(gas);
            break;

        case "Taco":
        case "Italian":
            food[food.length - 1] += 60;
            checkValue(food);
            break;
        
        case "Sandwich":
            food[food.length - 1] += 40;
            thirst[thirst.length - 1] += 20;
            checkValue(food);
            checkValue(thirst);
            break;

        case "Fair":
            entertainment[entertainment.length - 1] += 40;
            food[food.length - 1] += 20;
            thirst[thirst.length - 1] += 20;
            checkValue(entertainment);
            checkValue(food);
            checkValue(thirst);
            break;

        case "Shopping":
            break;

        case "Juice":
        case "Coffee":
            thirst[thirst.length - 1] += 60;
            checkValue(thirst);
            break;

        case "Flower":
            entertainment[entertainment.length - 1] = 100;
            checkValue(entertainment);
            break;

        case "Nightclub":
            thirst[thirst.length - 1] += 40;
            entertainment[entertainment.length - 1] += 40;
            checkValue(thirst);
            checkValue(entertainment);
            break;

        case "Ring":
            break;
        
        case "Theater":
            entertainment[entertainment.length - 1] += 60;
            checkValue(entertainment);
            break;

        case "Ballroom":
            entertainment[entertainment.length - 1] += 100;
            thirst[thirst.length - 1] -= 15;
            food[food.length - 1] -= 10;
            checkValue(entertainment);
            break;

        case "Airplane":
            entertainment[entertainment.length - 1] -= 10;
            break;
    }

    if ($(".list-group li").length >= 1) {
        $(".list-group li.active").removeClass("active"); 
        $(".list-group").append('<li class="list-group-item active" id="listItem">' + action + "</li>"); 
    } else {
        $(".list-group").append('<li class="list-group-item active">' + action + "</li>"); 
    }
    
}

function checkValue(resource) {
    if (resource[resource.length - 1] > 100)
        resource[resource.length - 1] = 100;
}

function updateValues(i) {
    

    /* Gas BG Values */
    if (gas[i] > 50) {
        $("#gasBar").removeClass("bg-warning");
        $("#gasBar").removeClass("bg-danger");
    }

    if (gas[i] <= 50){
        $("#gasBar").removeClass("bg-danger");
        $("#gasBar").addClass("bg-warning");
    }

    if (gas[i] <= 25) {
        $("#gasBar").removeClass("bg-warning");
        $("#gasBar").addClass("bg-danger");
    }

    /* Food BG Values */
    if (food[i] > 50) {
        $("#foodBar").removeClass("bg-warning");
        $("#foodBar").removeClass("bg-danger");
    }

    if (food[i] <= 50){
        $("#foodBar").removeClass("bg-danger");
        $("#foodBar").addClass("bg-warning");
    }

    if (food[i] <= 25) {
        $("#foodBar").removeClass("bg-warning");
        $("#foodBar").addClass("bg-danger");
    }

    /* Thirst BG Values */
    if (thirst[i] > 50) {
        $("#thirstBar").removeClass("bg-warning");
        $("#thirstBar").removeClass("bg-danger");
    }

    if (thirst[i] <= 50){
        $("#thirstBar").removeClass("bg-danger");
        $("#thirstBar").addClass("bg-warning");
    }

    if (thirst[i] <= 25) {
        $("#thirstBar").removeClass("bg-warning");
        $("#thirstBar").addClass("bg-danger");
    }

    /* Entertainment BG Values */
    if (entertainment[i] > 50) {
        $("#entertainmentBar").removeClass("bg-warning");
        $("#entertainmentBar").removeClass("bg-danger");
    }

    if (entertainment[i] <= 50){
        $("#entertainmentBar").removeClass("bg-danger");
        $("#entertainmentBar").addClass("bg-warning");
    }

    if (entertainment[i] <= 25) {
        $("#entertainmentBar").removeClass("bg-warning");
        $("#entertainmentBar").addClass("bg-danger");
    }

    /* Time BG Values */
    if (time[i] > 50) {
        $("#timeBar").removeClass("bg-warning");
        $("#timeBar").removeClass("bg-danger");
    }

    if (time[i] <= 50){
        $("#timeBar").addClass("bg-warning");
    }

    if (time[i] <= 25) {
        $("#timeBar").removeClass("bg-warning");
        $("#timeBar").addClass("bg-danger");
    }
}


function updateProgress() {
    if (gas[gas.length - 1] <= 0 || food[food.length - 1] <= 0 || thirst[thirst.length - 1] <= 0 
        || entertainment[entertainment.length - 1] <= 0 || time[time.length - 1] <= 0) {
            alert("Less than 0. Please reset.");
        }

    if (time.length > 1) {
        $("#btnUndo").removeClass("disabled");
    } else {
         $("#btnUndo").addClass("disabled");
    }

    updateValues((gas.length - 1));

    $("#gasBar").width(gas[gas.length - 1] + "%");
    $("#gasBar").html(gas[gas.length - 1]);

    $("#foodBar").width(food[food.length - 1] + "%");
    $("#foodBar").html(food[food.length - 1]);

    $("#thirstBar").width(thirst[thirst.length - 1] + "%");
    $("#thirstBar").html(thirst[thirst.length - 1]);

    $("#entertainmentBar").width(entertainment[entertainment.length - 1] + "%");
    $("#entertainmentBar").html(entertainment[entertainment.length - 1]);

    $("#timeBar").width(time[time.length - 1] + "%");
    $("#timeBar").html(time[time.length - 1]);

}

function resetHandler() {
    gas.splice(1, gas.length);
    food.splice(1, food.length);
    thirst.splice(1, thirst.length);
    entertainment.splice(1, entertainment.length);
    time.splice(1, time.length);

    updateProgress();
    $(".list-group").html("");
}