$(document).ready(function(){
    onscroll = function(){
        var headerTransparency = $(document).scrollTop();
        if (headerTransparency >= 10){
        $('.MainNav').addClass('MainNav-down');
        }
        else {
            $('.MainNav').removeClass('MainNav-down');
        }
}});


