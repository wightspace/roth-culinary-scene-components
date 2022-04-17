$(document).ready(function () {
    console.log('src');
    $("load").each(function (index) {
        let src = $(this).attr('src');
        $(this).load(src);
    });
});