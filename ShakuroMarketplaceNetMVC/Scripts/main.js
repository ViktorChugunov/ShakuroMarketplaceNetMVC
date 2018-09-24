﻿$(document).ready(function () {
    //отобразить/скрыть панель Login
    $(".header-user-bar-login-icon").click(function () {
        if ($(".login-form-container").hasClass("login-form-container-hidden")) {
            $(".login-form-container").addClass("login-form-container-visible");
            $(".login-form-container").removeClass("login-form-container-hidden");
        }
        else if ($(".login-form-container").hasClass("login-form-container-visible")) {
            $(".login-form-container").addClass("login-form-container-hidden");
            $(".login-form-container").removeClass("login-form-container-visible");
        }
    });

    //отобразить панель добавления отзыва
    $(".add-review-button").click(function () {
        $(".add-review-block").addClass("add-review-block-visible");
        $(".add-review-block").removeClass("add-review-block-hidden");
    });

    //закрыть панель добавления отзыва
    $(".add-review-cancel-button").click(function () {
        $(".add-review-block").addClass("add-review-block-hidden");
        $(".add-review-block").removeClass("add-review-block-visible");
    });
    
    //отобразить панель добавления сообщения в дискуссию
    $(".add-message-button").click(function () {
        $(".add-message-block").addClass("add-message-block-visible");
        $(".add-message-block").removeClass("add-message-block-hidden");
        $(".discussion-group").attr("value", "-1");
    });

    //закрыть панель добавления сообщения в дискуссию
    $(".add-message-cancel-button").click(function () {
        $(".add-message-block").addClass("add-message-block-hidden");
        $(".add-message-block").removeClass("add-message-block-visible");
        $(".discussion-group").attr("value", "");
    });

    //отобразить панель добавления сообщения в дискуссию (REPLY)
    $(".discussions-list-item-bottom-reply").click(function () {
        $(".add-message-block").addClass("add-message-block-visible");
        $(".add-message-block").removeClass("add-message-block-hidden");
        $(".message-textarea").val($(this).attr("reply-to") + ", ");
        $(".discussion-group").attr("value", $(this).attr("discussion-group"));
        $(".message-textarea").focus();
        
    });

    //закрыть панель добавления сообщения в дискуссию (REPLY)
    $(".add-message-cancel-button").click(function () {
        $(".add-message-block").addClass("add-message-block-hidden");
        $(".add-message-block").removeClass("add-message-block-visible");
        $(".message-textarea").val("");
        $(".discussion-group").attr("value", "");
    });

    //отобразить изображение товара в большом окне
    $(".small-good-image-container").click(function () {
        var smallImageSrc = $(this).find('img').attr("src");
        $(".big-good-image-container img").attr("src", smallImageSrc);        
    });

    //выбрать цвет товара
    $(".select-color").on('change', function (e) {
        window.location = this.value;
    });
    
    //добавить товар в корзину
    $(".add-to-cart-button").click(function () {
        var goodId = $(this).attr("good-id");
        if ( $(".add-to-cart-button").hasClass("good-not-in-cart") ) {
            $.get("/Cart/AddGoodToCart/" + goodId, function (goodIdList) {

            });
            //изменить отображение кнопки добавить/удалить товар
            $(".add-to-cart-button").addClass("good-in-cart");
            $(".add-to-cart-button").removeClass("good-not-in-cart");
            $(".add-to-cart-button").html("Remove from cart");
        }
        else if ( $(".add-to-cart-button").hasClass("good-in-cart") ) {
            $.get("/Cart/RemoveGoodFromdCart/" + goodId, function (goodIdList) {

            });
            //изменить отображение кнопки добавить/удалить товар
            $(".add-to-cart-button").addClass("good-not-in-cart");
            $(".add-to-cart-button").removeClass("good-in-cart");
            $(".add-to-cart-button").html("Add to cart");
        }        
    });

    //закрыть панель изменения задачи
    $("#change-task-form-close-icon").click(function () {
        $(".change-task-block").addClass("change-task-block-hidden");
        $(".change-task-block").removeClass("change-task-block-visible");
    });

});
