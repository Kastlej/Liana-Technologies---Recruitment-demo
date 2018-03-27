
$('.Count').each(function () {
	$(this).prop('Counter',0).animate({
		Counter: $(this).text()
		}, {
       	duration: 7000, easing: 'swing',
       	step: function (now) {
		$(this).text(Math.ceil(now));
       	}
    });
});


$('#subbtn').on("click", function(){
	$('#frontpage').addClass("blur");
	$('.subscribed').attr('id', 'visible');

});


$('#subexit').on("click", function(){
	$('#frontpage').removeClass("blur");
	$('.subscribed').attr('id', '');

});