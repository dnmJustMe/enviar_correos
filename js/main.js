$(function () {
  $('#enviar').click(function (e) {
    e.preventDefault()
    var de = $('#email-destinatario').val()
    var para = $('#email-destino').val()
    var asunto = $('#asunto').val()
    var mensaje = $('#mensaje').val()


    if (de != "" && para != "" && asunto != "" && mensaje != "") {
      alerta('info', `Se está enviando su correo. <div class="spinner-grow text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>`, 'left', 'top', 100000, 0)
      $.ajax({
        type: "POST",
        url: "https://dnmenviarcorreo.000webhostapp.com/app/enviar_correo.php",
        data: {
          de: de,
          para: para,
          asunto: asunto,
          mensaje: mensaje
        },
        success: function (respuesta) {
          if (respuesta == 1) {
            $(".alert-area").empty()
            document.getElementById("form").reset()
            alerta('success', `Su correo ha sido enviado.`, 'left', 'top', 5000, 0)
          } else {
            alerta('danger', `No se ha podido enviar tu correo.`, 'left', 'top', 5000, 0)
          }
        },
        error: function (err) {
          alerta('danger', `Ha ocurrido un error en el servidor, pruebe más tarde.`, 'left', 'top', 5000, 0)
        },
      });
    }else{
      alerta('danger', `Debe rellenar todos los campos.`, 'left', 'top', 5000, 0)
    }



  })
})
