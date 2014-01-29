$(document).on("ready", Listo);

function Listo () {
	$('#box1').draggable();
	$('#box2').droppable({over: function(){
		$('#box1').css('background', 'red');
	}});
	$('#box3').resizable();
	$('#Ciudades').selectable();
	$('#Paises').sortable();
	$('#acordeon').accordion();

	var posibilidades= ['Juan', 'Daniel', 'Pepito', 'Jose'];
	$('#nombres').autocomplete({source:posibilidades});
	$('.boton_ui').button();

	$('#calendario').datepicker();

	$('#pestana').tabs();
}