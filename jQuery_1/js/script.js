$(document).on('ready', paginaCargada);

function paginaCargada () {
	//$('#box').on('click', clickBox);
	$('p.job').on('click', clickJob);
	$('p:eq(1)').css('font-weight','bold');
	$('tr:eq(0)').css('background','black');
	$('tr:eq(0)').css('color','white');
	$('tr:eq(1)').css('background','#eee');
	$('tr:eq(2)').css('background','#ccc');
	$('tr:eq(3)').css('background','gray');
	$('[href$=".pdf"]').css('color', 'red');
	$('[href$=".html"]').css('color', 'green');
	$('li a>div').css('background', 'gray');

	var numero_paises = $('#box_3 li:not(#ciudades>li)').size();
	$('#numero').text(numero_paises);

}

function clickBox() {
	$(this).hide();
}
function clickJob() {
	$('p.job').css('background', 'red');
}


