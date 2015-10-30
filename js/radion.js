function oneHeightBlog(){
    if($(window).width() <= 1024 && $('.blog_page_wrap ').length > 0){
       $('.blog_item').each(function(){
            var block = $(this).find('.blog_item_cell');
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
            oneHeight(block);
       });
    }
}
$(document).ready(function(){
    oneHeightBlog();
});
$(window).resize(function(){
    oneHeightBlog();
});