
function print() {
    console.log("Печать")
    var divToPrint = document.getElementById('category-list');
    var newWin = window.open();
    newWin.document.write('<body onafterprint="self.close()">');

    var css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = 'style.css';
    css.type = 'text/css';


    newWin.document.write('<html><head>');
    newWin.document.write('<link rel="stylesheet" href="style.css" type="text/css" media=\\"all\\" />');
    newWin.document.write('</head><body >' + divToPrint.outerHTML + '</body>');
    newWin.document.write('</html>');

    newWin.document.getElementsByTagName('head')[0].appendChild(css);
    newWin.document.close();
    newWin.focus();
    newWin.print();
}

jQuery(document).ready(function ($) {

    data = pots[0]

    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            var html = data[key]
            html = html.replace(/\\/g, '');
            $('.category-list').append(html);
        }
    }
})

jQuery(document).ready(function ($) {
    $('.category-filter .category').on('click', function () {
        $('.category-filter div').removeClass('active');
        console.log($(this))
        $(this).addClass('active');

        var cat = $(this).attr('data-filter');

        console.log(cat)
        if (cat == 'all') {
            $('.category-list .category-item').show();
        } else {
            $('.category-list .category-item').hide();
            $('.category-list .category-item[data-filter="' + cat + '"]').show();
        }
    });

    $(".category-filter .category").on("mouseover",
        function
            () {
            $(this).addClass('hover');
        });

    $(".category-filter .category").on("mouseout",
        function
            () {
            $(this).removeClass('hover');
        });

    $(".btn-print").on("mouseover",
        function
            () {
            $(this).addClass('hover');
        });

    $(".btn-print").on("mouseout",
        function
            () {
            $(this).removeClass('hover');
        });

    // Категория защиты
    $("#items th.col-protection").on("mouseover",
        function
            (eventObject) {
            $('.tooltiptext').css({
                "top": eventObject.pageY + 5,
                "left": eventObject.pageX - 350,
                "visibility": "visible",
                "opacity": 1
            }).show()
        });

    $("#items th.col-protection").on("mouseout",
        function
            (eventObject) {
            $('.tooltiptext').hide().css({
                "top": eventObject.pageY + 5,
                "left": eventObject.pageX + 5,
                "visibility": "hidden",
                "opacity": 0
            })
        });
})


