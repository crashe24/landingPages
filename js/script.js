$(function() {
	$('#mc-embedded-subscribe').click(
		function(){
			//Que contiene el formulario
			if($('#mce-EMAIL').val()== '') {
				//el campo de email esta vacio
			  $('#alert-error').removeClass('hidden').addClass('show');
			}else {
				//el campo de email no esta vacio
				if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($('#mce-EMAIL').val())){
					//esconder mensaje de error
					$('#alert-error').removeClass('show').addClass('hidden');
					//mostrat mensaje de exito
					$('#alert-exito').removeClass('hidden').addClass('show');
					//esconder el formulario
					$('#first-to-try').removeClass('show').addClass('hidden');
					$('#mc-embedded-subscribe-form').removeClass('show').addClass('hidden');
					
				}else{
					//no esta vacio pero esta incorrecto 
					$('#alert-error').removeClass('hidden').addClass('show');

				}
			}
		}
	);

	$('#myModal').on('hidden.bs.modal', function (e) {
  		// do something...
  		//alert('Esto es una prueba');
  		$(this).find('iframe')[0].src +='';
	})
} );