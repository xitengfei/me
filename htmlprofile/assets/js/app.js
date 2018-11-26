!function() {
    // console.log(1);

    function activeCard(selector){
        console.log(selector);
        if(selector == '#home'){
            $("#body").removeClass('wide-view');
            $(".xui-card").removeAttr('active-page');
        }else{
            if(!$(selector).length){
                console.log('card'+selector+'not found!');
                return;
            }
            
            $("#body").addClass('wide-view');
            $(".xui-card").removeAttr('active-page');
            $(selector).attr('active-page', 'true');
        }

        $("#main-menu li a").each(function(){
            if($(this).attr('href') == selector){
                $(this).parent('li').addClass('menu-active');
            }else{
                $(this).parent('li').removeClass('menu-active');
            }
        });
    }

    var hash = window.location.hash;
    activeCard(hash);

    $("#main-menu li a").click(function(){
        var selector = $(this).attr('href');
        activeCard(selector);
    });
    $(window).on('hashchange', function() {
        var hash = window.location.hash;
        activeCard(hash);
    });
}();