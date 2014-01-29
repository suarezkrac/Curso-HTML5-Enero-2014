$(document).on('ready', paginaCargada);

function paginaCargada () {
	$('#btn_1').on('click', showBox);
	$('#btn_2').on('click', hideBox);
	$('#btn_3').on('click', toggleBox);
	$('#btn_4').on('click', FadeInBox);
	$('#btn_5').on('click', FadeOutBox);
	$('#btn_6').on('click', slideUpBox);
	$('#btn_7').on('click', slideDownBox);
}
function slideUpBox () {
	$('#box4').slideUp("slow");
}

function slideDownBox () {
	$('#box4').slideDown("slow");
}

function toggleBox () {
	//$('#box2').toggle(2000);

	$('#box2').toggle(2000, function(){
		$('#box1').hide("slow");
	});
}

function showBox () {
	$('#box1').show("slow");
}

function hideBox () {
	$('#box1').hide("slow");
}

function FadeInBox () {
	$('#box3').fadeIn("slow");
}

function FadeOutBox () {
	$('#box3').fadeOut("slow");
}

