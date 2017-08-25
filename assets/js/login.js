$(function() {

    // ==============================     login     start    =============================

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

    // 记住密码
    $('.login .memr input').click(function() {
        if ($(this).prop('checked')) {
            $('.login .memr span').css('background-position', '-35px -319px');
        } else {
            $('.login .memr span').css('background-position', '0 0');
        }
    })

    // ==============================     login     end    =============================
})