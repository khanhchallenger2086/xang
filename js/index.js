$(document).ready(function(){
    $('.icon-menu').click(function(){
        toggle_menu();
    });

    $('.icon-close').click(function(){
        toggle_menu();
    });

    $('.icon-menu-cat ').click(function(){
        $(".ul-menu-cat").slideToggle();
    });
});

function toggle_menu() {
    $('.menu').toggleClass('reset-transform');
}
