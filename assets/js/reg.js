$(function() {

    // ==============================     reg     start    =============================

    // 语言选择
    $('.login-language>a').click(function() {
        if ($('.login-language>ul').css('display') == 'none') {

            $('.login-language>ul').css('display', 'block');
        } else {
            $('.login-language>ul').css('display', 'none');

        }
    })
    $('.login-language>ul li a').click(function() {
        $('.login-language>span').text($(this).text());
    })


    // 同意条款
    $('.ad input').click(function() {
        if ($(this).prop('checked')) {
            $(this).parent().css('background-position', '-35px -319px');
        } else {
            $(this).parent().css('background-position', '0 0');
        }
    })

    // ==============================     reg     end    =============================


})