<?php
    $de = $_POST['de'];
    $para = $_POST['para'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];

    $header = 'From: ' . $de . " \r\n";

    $mensaje = "Este mensaje fue enviado por " . $de . ",\r\n";
    $mensaje .= "Mensaje: " . " \r\n" . $_POST['mensaje'] . " \r\n" . " \r\n";
    $mensaje .= "Enviado el " . date('d/m/Y', time());

    $exito = mail($para, $asunto, utf8_decode($mensaje), $header);