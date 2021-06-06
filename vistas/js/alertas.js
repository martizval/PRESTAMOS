const formularios_ajax = document.querySelectorAll(".FormularioAjax");

function enviar_formulario_ajax(e){
	e.preventDefault();
}

formularios_ajax.forEach(formularios =>{
	formularios.addEventListener("submit",enviar_formulario_ajax);
});

function alerts_ajax(alerta){
	if (alerta.Alerta==="simple") {
		Swal.fire({
  			title: alerta.Titulo,
  			text: alerta.Texto,
  			type: alerta.Tipo,
  			ConfirmButtontext: 'Aceptar'
		});
	}else if(alerta.Alerta==="recargar"){
		Swal.fire({
  			title: 'Are you sure?',
  			text: "You won't be able to revert this!",
  			icon: 'warning',
  			showCancelButton: true,
  			confirmButtonColor: '#3085d6',
  			cancelButtonColor: '#d33',
  			confirmButtonText: 'Yes, delete it!'
		}).then((result) => {
 			if (result.value) {
    			
  			}
		})

	}
}
