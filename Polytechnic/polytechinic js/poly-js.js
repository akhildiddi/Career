$(document).ready(function () {
    $('.menu-icon-container').click(function () {
        $('.side-navbar-container').css("display", "block")
    })
    $('.close-button-container').click(function () {
        $('.side-navbar-container').hide(1000)
    })
})