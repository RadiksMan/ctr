$(document).ready(function(){
    if($('#video-box').length!=0){
        var vid = document.getElementById("video-box");
            vid.oncanplay = function() {
                $(".inside-preloader").addClass("class-hide");
                $(".inside-swf").removeClass("class-hide");
            console.log("load");
            };
    }
})