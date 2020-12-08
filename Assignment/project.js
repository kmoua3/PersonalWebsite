$(document).ready(function() {

    // Message from JSON file
    $.getJSON("web.json", function(data) {
        $.each(data, function () {
            $.each(this, function (key, value) {
                $("#x").append(
                    "<br><p id='message'>" + value.message + "</p><br>"
                );
            });
        });
    });


    // Accordion
    $("#accordion").accordion({
        active: false,
        heightStyle: "content",
        collapsible: true
    });

    // Dialog box
    $("#dialog").hide();
    $("#showDialog").click(function() {
        $("#dialog").dialog();
    });

    // Slide show
    // var $slideshow = $(".cycle-slideshow");
    //
    // $slideshow.click(function() {
    //     if ($slideshow.is(".cycle-paused"))
    //         $slideshow.cycle("resume");
    //     else
    //         $slideshow.cycle("pause");
    // });



});