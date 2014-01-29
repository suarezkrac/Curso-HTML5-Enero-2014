$(document).on('ready', paginaCargada);

function paginaCargada () {
	$('#btn_1').on('click', clickBoton1);
	$('#btn_2').on('click', clickBoton2);
	$('#btn_3').on('click', clickBoton3);
	$('#btn_4').on('click', clickBoton4);


	$('#btn_5').on('click', clickBoton5);
	$('#btn_6').on('click', clickBoton6);

	$('#btn_7').on('click', clickBoton7);
}

function clickBoton7 () {
	$('#nuevoHtml').html("<ul><li>Hola desde Javascript</li></ul>");
}

function clickBoton5 () {
	$('p').addClass('nuevaClase');
}
function clickBoton6 () {
	$('p').removeClass('nuevaClase');
}

function clickBoton1 () {
	$('#box1').css('background', 'red');
}
function clickBoton2 () {
	$('.box2').css('background', 'red');
}
function clickBoton3 () {
	$('[href$=".png"]').css('color', 'red');
}
function clickBoton4 () {
	$('a').css('color', 'red');
}