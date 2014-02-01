$(document).on("ready", paginaCargada);

function paginaCargada () {

	$('.parallax').scrolly({bgParallax: true});

	$('#slider').unslider({
		speed: 500,               //  The speed to animate each slide (in milliseconds)
		delay: 3000,              //  The delay between slide animations (in milliseconds)
		complete: function() {},  //  A function that gets called after every slide animation
		keys: true,               //  Enable keyboard (left, right) arrow shortcuts
		dots: true,               //  Display dot navigation
		fluid: false              //  Support responsive design. May break non-responsive designs
	});

	$('#contacto button').on('click', enviarInformacion);
}

function enviarInformacion(){

	var info_1 = $('#campo_1').val();
	var info_2 = $('#campo_2').val();
	var info_3 = $('#campo_3').val();

	$.post("php/envioMail.php", {nombre_usuario: info_1, correo_usuario: info_2, mensaje_usuario: info_3}, function(data) {
		alert(data);
	
	});

	return false;
}