// SVG
$(".svg-art").click(function() {
    if ($(".flag").hasClass("toggle-click")) {
        $(".flag").removeClass("toggle-click")
        $(".flag").removeClass("flag-up")
        $(".svg-art").removeClass("to-day")
        $(".circle-flag").removeClass("circle-flag-up")
        $(".moon").removeClass("moon-animation")
        $(".sun").removeClass("sun-animation")

        $(".flag").addClass("flag-down")
        $(".circle-flag").addClass("circle-flag-down")
        $(".sun").addClass("moon-animation")
        $(".moon").addClass("sun-animation")
        $(".svg-art").addClass("to-night")
    } else {
        $(".flag").addClass("toggle-click")
        $(".flag").removeClass("flag-down")
        $(".circle-flag").removeClass("circle-flag-down")
        $(".svg-art").removeClass("to-night")
        $(".sun").removeClass("moon-animation")
        $(".moon").removeClass("sun-animation")

        $(".flag").addClass("flag-up")
        $(".circle-flag").addClass("circle-flag-up")
        $(".moon").addClass("moon-animation")
        $(".sun").addClass("sun-animation")
        $(".svg-art").addClass("to-day")
    }
})

// CANVAS
$(".canvas-art").hover(function() {
    $(".canvas-art").css("background", "skyblue")
    drawCircle("#FDB813", 60, 50, 25)
    ctx.fillStyle = "skyblue";
    ctx.fillRect(250, 150, 80, 50);
    ctx.fillStyle = "grey";
    ctx.fillRect(250, 75, 10, 125);
    ctx.fillStyle = "white";
    ctx.fillRect(250, 75, 80, 50);

    ctx.closePath();
    ctx.beginPath();

    drawCircle("red", 290, 100, 15)

    ctx.closePath();
    ctx.beginPath();
    }, function() {
    $(".canvas-art").css("background", "#131862");
    ctx.fillStyle = "#131862";
    ctx.fillRect(250, 75, 80, 50);
    drawCircle("#f5f3ce", 60, 50, 25);
    ctx.fillStyle = "grey";
    ctx.fillRect(250, 75, 10, 125);
    ctx.beginPath();
    drawFlag();
})


// CANVAS DRAWING
function drawCircle(color, x, y, r) {
    ctx.save();
    ctx.arc(x, y, r, 0, 2*Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.restore()
}

function drawFlag() {
    // Flag pole
    ctx.fillStyle = "grey";
    ctx.fillRect(250, 75, 10, 125);

    // Flag
    ctx.fillStyle = "white";
    ctx.fillRect(250, 150, 80, 50);

    // Red in flag
    drawCircle("red", 290, 175, 15)
    ctx.closePath();
    ctx.beginPath();
}

let canvas = $("#canvas");
let ctx = canvas[0].getContext("2d");

//  Ground
ctx.fillStyle = "green";
ctx.fillRect(0, 200, 500, 50);

drawFlag()
// Moon
drawCircle("#f5f3ce", 60, 50, 25)

// DOCUMENTATION
$(".container:last").click(function(){
    $("#documentation").toggle();
    let text = $(".document-h1").text()
    $(".document-h1").text(
        text == "+ Documentation" ? "- Documentation" : "+ Documentation");
})
