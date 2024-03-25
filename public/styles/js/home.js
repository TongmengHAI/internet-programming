    $(".add_btn button").click(function() {
        $(this).hide();
        $(this).siblings(".add_num").show();

        $(this).siblings(".add_num").attr("min", 0);
    });

    $(".add_num").change(function() {
        var value = $(this).val();

        if (value == 0) {
            $(this).hide();
            $(this).siblings(".btn").show();
        }


    });

