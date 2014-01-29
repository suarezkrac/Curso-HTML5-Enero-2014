$(document).on('ready', paginaCargada);

function paginaCargada () {
	$('#background_lightbox').addClass('mostrar');
	$('#lightbox').addClass('mostrar');

	$('button').on('click', ingresar);
}
function ingresar(){
	var nombre = $('#user').val();
	$('#user_login').html(nombre);

	$('#background_lightbox').removeClass('mostrar');
	$('#lightbox').removeClass('mostrar');
	$('#main').addClass('mostrar');
}

