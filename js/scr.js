var scroller=jQuery.browser.webkit ? "body": "html";

/* modernize */
function modernize() {
	// placeholder
	if(!Modernizr.input.placeholder){
		$('[placeholder]').each(function() {
			$(this).watermark($(this).attr('placeholder'));
		});
	}
}


/* input only Number  */
function inputNumber(block) {
	$('input', block).keypress(function(e) {
		if (e.which >= 47 && e.which <= 57 ){}
		else return false;
	});

	$('input', block).keyup(function() {
		$inputNum = $(this);
		if ($inputNum.val == '' || $inputNum.val() == 0) {
			$inputNum.val('');
		}
	});
}


/* u_tabs */
function u_tabs(link, block) {
	$(link).click(function(e) {
		var $currentTab = $(this);
		var tabId = $currentTab.data('utab');

		$(link).removeClass('active');
		$currentTab.addClass('active');

		$(block).hide().removeClass('active');
		$(block+'[data-utab="' + tabId + '"]').show().addClass('active');
		if($(link).is('a')){
			e.preventDefault();
		}
	});
	$(link).eq(0).click();
}

/* scrollUp */
function scrollUp(block,targetBlock) {

    $(block).click(function(e){
        var target = $(targetBlock).offset().top;
        $(scroller).animate({scrollTop:target},800);
        return false;
        e.preventDefault();
    });

    function showHideScrollUp(){
        if($('body').scrollTop()>($(window).height()/3)){
            $(block).addClass('active');
        }
        else{
            $(block).removeClass('active');
        }
    }

    showHideScrollUp();

    $(window).resize(function(){
        showHideScrollUp();
    });

    $(window).scroll(function(){
        showHideScrollUp();
    });


}


function initScrollpane(){
	$('.scroll-pane').jScrollPane();
}


function oneHeightItems(){

	function oneHeight(block){
		var height=0;
		block.removeAttr('style');
		block.each(function(){
			if($(this).height()>height){
				height=$(this).height();
			}
		});
		block.css('height', height);
	}

	oneHeight($('.oneHeight'));

    if($(window).width()>767 && $(window).width()<1025){
        $('.blog_item').each(function(){
            oneHeight($(this).find('.blog_item_cell:not(.blog_item_img_phone)'));
        })
    }else{
        $('.blog_item').find('.blog_item_cell').removeAttr('style');
    }

    $(window).resize(function(){
        if($(window).width()>767 && $(window).width()<1025){
            $('.blog_item').each(function(){
                oneHeight($(this).find('.blog_item_cell:not(.blog_item_img_phone)'));
            })
        }else{
            $('.blog_item').find('.blog_item_cell').removeAttr('style');
        }

    });
}

function validate(form, options){
    var setings = {
        errorFunction:null,
        submitFunction:null
    }
    $.extend(setings, options);

    var $form = $(form);

    if ($form.length && $form.attr('novalidate') === undefined) {
        $form.on('submit', function(e) {
            e.preventDefault();
        });

        $form.validate({
            errorClass : 'errorText',
            focusCleanup : true,
            focusInvalid : false,
            invalidHandler: function(event, validator) {
                if(typeof(setings.errorFunction) === 'function'){
                    setings.errorFunction();
                }
            },
            errorPlacement: function(error, element) {
                error.appendTo( element.closest('.form_input'));
            },
            highlight: function(element, errorClass, validClass) {
                $(element).addClass('error');
                $(element).closest('.form_row').addClass('error');
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).removeClass('error');
                $(element).closest('.form_row').removeClass('error');
            },
            submitHandler: function(form) {
                if( typeof(setings.submitFunction) === 'function' ) {
                    setings.submitFunction();
                } else {
                    form.submit();
                }
            }
        });

        $('[required]',$form).each(function(){
            $(this).rules( "add", {
                required: true,
                messages: {
                    required: "Вы пропустили"
                }
            });
        });

        if($('[type="email"]',$form).length) {
            $('[type="email"]',$form).rules( "add",
            {
                messages: {
                    email: "Невалидный email"
                 }
            });
        }

        if($('.tel-mask[required]',$form).length){
            $('.tel-mask[required]',$form).rules("add",
            {
                messages:{
                    required:"Введите номер мобильного телефона."
                }
            });
        }
    }
}

function animationBlock(item){

    $(window).scroll(function(){
        checkForAnimate();
    });

    function checkForAnimate(){
        var bottomCheck = $(window).height()+$(window).scrollTop();
        var windowTop = $(window).scrollTop()+($(window).height()/2);
        item.each(function(){
           if(windowTop>$(this).offset().top || bottomCheck > $('body').height()*0.98){

              var itemSect = $(this);
              var point = 0;
              itemSect.find('.animate-it').addClass('animated');

              var timer = setInterval(function(){
                 itemSect.find('.animate-delay').eq(point).addClass('animated');
                 point++;
                 if(itemSect.find('.animate-delay').length == point){
                     clearInterval(timer);
                 }
              },200);


           }
        });
    }
    checkForAnimate();
}

function recomendationSlick(){

    if($(window).width() > 1024){
        $('.recomendation-slider.recomendation-device-slider').remove();
        $('.recomendation-slider').slick({
            slidesToShow: 1,
            speed: 300,
            slidesToShow: 1,
            arrows: true
        });
    }
    else{
        $('.recomendation-slider:not(.recomendation-device-slider)').remove();
        $('.recomendation-slider.recomendation-device-slider').slick({
            slidesToShow: 1,
            speed: 300,
            slidesToShow: 2,
            arrows: true,
            responsive: [
                {
                    breakpoint:769,
                    settings:{
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        speed: 300,
                        arrows: true
                    }
                }
            ]
        });
    }

}

function deviceNav(){
    $('.sendwich-icon').click(function(){
        if($(window).width()<1025){
            if($(this).is('.active')){
                $(this).removeClass('active');
                $('.block-nav nav').slideUp(300);
            }
            else{
                $(this).addClass('active');
                $('.block-nav nav').slideDown(300);
            }
        }
    });
};

/* DOCUMENT READY  */
$(document).ready(function() {
	modernize();


	oneHeightItems();
    scrollUp('.scroll-top','body');
});

$(window).load(function(){

    $('.footer_placeholder').height($('.footer').outerHeight());

    animationBlock($('.animate-section'));
    animationBlockDown($('.animate-section-down'));
    recomendationSlick();
    deviceNav();

});

$(window).resize(function() {

    $('.footer_placeholder').height($('.footer').outerHeight());
});






function animationBlockDown(item){

    $(window).scroll(function(){
        checkForAnimate();
    });

    function checkForAnimate(){
        var bottomCheck = $(window).height()+$(window).scrollTop();
        var windowTop = $(window).scrollTop()+($(window).height()/1.5);
        item.each(function(){

           if(windowTop>$(this).offset().top+$(this).height()+200 ){

              var itemSect = $(this);
              var point = 0;
              itemSect.find('.animate-it').addClass('animated');


              var timer = setInterval(function(){
                 itemSect.find('.animate-delay').eq(point).addClass('animated');
                 point++;
                 if(itemSect.find('.animate-delay').length == point){
                     clearInterval(timer);
                 }
              },200);


           }
        });
    }
    checkForAnimate();
}