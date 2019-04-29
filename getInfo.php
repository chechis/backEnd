<?php
  session_start();


    $response['nombre'] = getInfo('username', 'nombre');
    $response['descripcion'] = getInfo('username', 'descripcion');
    $response['info_basica'] = getInfo($_SESSION['username'], 'id');
    $response['hoja_vida'] = getInfo($_SESSION['username'], 'hoja_vida');
    $response['img'] = getInfo($_SESSION['username'], 'profile_img');
    $response['msj'] = "true";

  echo json_encode($response);



 ?>
