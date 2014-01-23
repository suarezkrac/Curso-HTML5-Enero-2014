$(document).on('ready', paginaCargada);

function paginaCargada () {
	//$('#box').on('click', clickBox);
	$('p.job').on('click', clickJob);
}

function clickBox() {
	$(this).hide();
}
function clickJob() {
	$('p.job').css('background', 'red');
}


