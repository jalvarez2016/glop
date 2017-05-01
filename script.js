/*global $*/



$(document).ready(function() {

    $(document).keydown(function(e) {
        if (e.keyCode === 65) {
            $("#choice-a").click();
        }
        else if (e.keyCode === 66) {
            $("#choice-b").click();
        }
        else if (e.keyCode === 67) {
            $("#choice-c").click();
        }
        else if (e.keyCode === 68) {
            $("#choice-d").click();
        }
        else if (e.keyCode === 49) {
            $("#choice-a").click();
        }
        else if (e.keyCode === 50) {
            $("#choice-b").click();
        }
        else if (e.keyCode === 51) {
            $("#choice-c").click();
        }
        else if (e.keyCode === 52) {
            $("#choice-d").click();
        }

    });

});
