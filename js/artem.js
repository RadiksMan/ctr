$(document).ready(function(){

var vid = document.getElementById("video-box");
    vid.oncanplay = function() {
        $(".inside-preloader").addClass("class-hide");
        $(".inside-swf").removeClass("class-hide");
    console.log("load");
    };
})