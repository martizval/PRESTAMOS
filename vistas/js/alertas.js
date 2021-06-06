const formularios_ajax = document.querySelectorAll(".FormularioAjax");

function enviar_formulario_ajax(e){
	e.preventDefault();
}

formularios_ajax.forEach(formularios =>{
	formularios.addEventListener("submit",enviar_formulario_ajax);
});

function alerts_ajax(alerta){
	
}
