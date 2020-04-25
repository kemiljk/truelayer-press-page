$(document).ready(function () {
    $(".btn-select").each(function (e) {
        var value = $(this).find("ul li.selected").html();
        if (value != undefined) {
            $(this).find(".btn-select-input").val(value);
            $(this).find(".btn-select-value").html(value);
        }
    });
});


var handled = false;
$(document).on('click touchstart', '.btn-select', function (e) {
    e.preventDefault();
    var ul = $(this).find("ul");
    if (e.type == "touchstart") {
        handled = true;
        if ($(this).hasClass("active")) {
            if (ul.find("li").is(e.target) && !$(e.target).hasClass("product")) {
                var target = $(e.target);
                $(".radio-wrapper").addClass("hide-radio");
                $(".product-label").addClass("hide-radio");
                $(".input-radio").prop("checked", false);
                target.addClass("selected").siblings().removeClass("selected");
                var value = target.html();
                $(this).find(".btn-select-input").val(value);
                $(this).find(".btn-select-value").html(value);
            } else if (ul.find("li").is(e.target) && $(e.target).hasClass("product")) {
                var target = $(e.target);
                $(".radio-wrapper").removeClass("hide-radio");
                $(".product-label").removeClass("hide-radio");
                $("#data-radio").prop("checked", true);
                target.addClass("selected").siblings().removeClass("selected");
                var value = target.html();
                $(this).find(".btn-select-input").val(value);
                $(this).find(".btn-select-value").html(value);
            }
            ul.hide();
            $(this).removeClass("active");
        }
        else {
            $('.btn-select').not(this).each(function () {
                $(this).removeClass("active").find("ul").hide();
            });
            ul.slideDown(300);
            $(this).addClass("active");
        }
    } else if (e.type == "click" && !handled) {
        if ($(this).hasClass("active")) {
            if (ul.find("li").is(e.target) && !$(e.target).hasClass("product")) {
                var target = $(e.target);
                $(".radio-wrapper").addClass("hide-radio");
                $(".product-label").addClass("hide-radio");
                $(".input-radio").prop("checked", false);
                target.addClass("selected").siblings().removeClass("selected");
                var value = target.html();
                $(this).find(".btn-select-input").val(value);
                $(this).find(".btn-select-value").html(value);
            } else if (ul.find("li").is(e.target) && $(e.target).hasClass("product")) {
                var target = $(e.target);
                $(".radio-wrapper").removeClass("hide-radio");
                $(".product-label").removeClass("hide-radio");
                $("#data-radio").prop("checked", true);
                target.addClass("selected").siblings().removeClass("selected");
                var value = target.html();
                $(this).find(".btn-select-input").val(value);
                $(this).find(".btn-select-value").html(value);
            }
            ul.hide();
            $(this).removeClass("active");
        }
        else {
            $('.btn-select').not(this).each(function () {
                $(this).removeClass("active").find("ul").hide();
            });
            ul.slideDown(300);
            $(this).addClass("active");
        }
    }
});

$(document).on('click touchstart', function (e) {
    var target = $(e.target).closest(".btn-select");
    if (!target.length) {
        $(".btn-select").removeClass("active").find("ul").hide();
    }
});
