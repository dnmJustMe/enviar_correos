$(function () {
  $('#enviar').click(function () {
    var de = $('#email-destinatario').val()
    var para = $('#email-destino').val()
    var asunto = $('#asunto').val()
    var mensaje = $('#mensaje').val()

    $.ajax({
      type: "POST",
      url: "http://dnmenviarcorreo.000webhostapp.com/app/enviar_correo.php",
      data: {
        de: de,
        para: para,
        asunto:asunto,
        mensaje: mensaje
      },
      success: function (respuesta) {
        console.log(respuesta)
        if (respuesta == 1) {
          console.log("enviado")
        } else {
          console.log("error")
        }
      },
      error: function (err) {
        console.log("ha ocurrido un error")
      },
    });

  })
})