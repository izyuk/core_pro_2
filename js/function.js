$(document).ready(function () {
    $('span').click(function () {
        var a = this;
        if($(a).hasClass('substr')){
            substr(a);
        } else if ($(a).hasClass('add')){
            add(a);
        }
    })
    function substr(a) {
        $(a).siblings('.count').text(parseInt($(a).siblings('.count').text())>1?parseInt($(a).siblings('.count').text()) - 1: parseInt($(a).siblings('.count').text()));
    }
    function add(a) {
        $(a).siblings('.count').text(parseInt($(a).siblings('.count').text()) + 1);
    }
    $('.style_toggle a').click(function () {
        $('.style_toggle a').removeClass('active');
        $(this).addClass('active');
        if($(this).hasClass('list')){
            $('.item_list').addClass('column');
        } else {
            $('.item_list').removeClass('column');
        }

    })
})