$('html, body').animate({ scrollTop: $(document).height() - $(window).height() }, 1000, function() {
    $(this).animate({ scrollTop: 0 }, 8000);
});
