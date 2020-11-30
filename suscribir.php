<?php
  $mail="bontosartebiblico@gmail.com";
  $suscribir = $_POST["suscribir"];
  $thank="suscripcion.html";
  $message = "
  suscribir:".$suscribir."";
  if (mail ($mail,"suscripcion",$message)) Header ("location: $thank" );
  ?>