<?php
header('Access-Control-Allow-Origin: * ');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('content-type: application/json; charset=utf-8');

    $de = $_POST['de'];
    $para = $_POST['para'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];

    $header = 'From: ' . $de . " \r\n";

    $mensaje = "Este mensaje fue enviado por " . $de . ",\r\n";
    $mensaje .= "Mensaje: " . " \r\n" . $_POST['mensaje'] . " \r\n" . " \r\n";
    $mensaje .= "Enviado el " . date('d/m/Y', time());

    $exito = mail($para, $asunto, utf8_decode($mensaje), $header);

    echo $exito;