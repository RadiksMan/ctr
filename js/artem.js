$(document).ready(function(){

    if ($(window).width()<=667) {
        $('.flow-form').remove();
        $('.logo-swf-wrap').remove();
    };
    if ($(window).width()>667) {
        $('.box-small-image').remove();
    };


   if ($(window).width()<=667){
        $('.inside-swf').remove();
        $('.inside-preloader').remove();
        $(".inside-image").removeClass("class-hide");
   }
   else{

        if($('#video-box').length!=0){
            var vid = document.getElementById("video-box");
                vid.oncanplay = function() {
                    $(".inside-preloader").addClass("class-hide");
                    $(".inside-swf").removeClass("class-hide");

                };
        }
    }
})