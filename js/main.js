$(function () {
    $('#enviar').click(function () {
        var de = $('#email-destinatario').val()
        var para = $('#email-destino').val()
        var asunto = $('#asunto').val()
        var mensaje = $('#mensaje').val()

        console.log(de + " " + para + " " + asunto + " " + mensaje)
    })
})