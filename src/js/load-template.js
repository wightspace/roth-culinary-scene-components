$(document).ready(function () {
    $("load").each(function (index) {
        console.log('src');
        let src = $(this).attr('src');
        $(this).load(src);
    });
});