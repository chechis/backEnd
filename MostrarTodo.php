<?php
$data = file_get_contents("./data.json");
$products = json_decode($data, true);

foreach ($products as $key => $value) {
  $response[$key]['Direccion'] = $value['Direccion'];
  $response[$key]['Ciudad'] = $value['Ciudad'];
  $response[$key]['Telefono'] = $value['Telefono'];
  $response[$key]['Codigo_Postal'] = $value['Codigo_Postal'];
  $response[$key]['Tipo'] = $value['Tipo'];
  $response[$key]['Precio'] = $value['Precio'];
}

echo json_encode($response);
?>
