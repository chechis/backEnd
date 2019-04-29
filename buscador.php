<?php
$ciudad = $_POST['ciudad'];
$tipo = $_POST['tipo'];
$precio = $_POST['precio'];
$array = explode(";", $precio);
$minimo = $array[0];
$ma = $array[1];
$Leliminar = array("$", ",");
$contador = 0;

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

$conteo = count($response);
for($i = 0; $i < $conteo ; $i++){
  $PrecioComparar[] = str_replace($Leliminar, "", $response[$i]['Precio']);
};

for($i = 0; $i < $conteo; $i++){
  if($ciudad == "elige"){
      if($response[$i]['Tipo'] == $tipo){
        if( ($PrecioComparar[$i] >= $minimo) && ($PrecioComparar[$i] <= $ma) ){
          $completo[$contador]['Direccion'] = $response[$i]['Direccion'];
          $completo[$contador]['Ciudad'] = $response[$i]['Ciudad'];
          $completo[$contador]['Telefono'] = $response[$i]['Telefono'];
          $completo[$contador]['Codigo_Postal'] = $response[$i]['Codigo_Postal'];
          $completo[$contador]['Tipo'] = $response[$i]['Tipo'];
          $completo[$contador]['Precio'] = $response[$i]['Precio'];
          $contador++;
      }
    }
  }

  if($tipo == "elige"){
    if($response[$i]['Ciudad'] == $ciudad){
      if( ($PrecioComparar[$i] >= $minimo) && ($PrecioComparar[$i] <= $ma) ){
        $completo[$contador]['Direccion'] = $response[$i]['Direccion'];
        $completo[$contador]['Ciudad'] = $response[$i]['Ciudad'];
        $completo[$contador]['Telefono'] = $response[$i]['Telefono'];
        $completo[$contador]['Codigo_Postal'] = $response[$i]['Codigo_Postal'];
        $completo[$contador]['Tipo'] = $response[$i]['Tipo'];
        $completo[$contador]['Precio'] = $response[$i]['Precio'];
        $contador++;
      }
    }
  }

  if($response[$i]['Ciudad'] != "elige"){
    if($response[$i]['Ciudad'] == $ciudad){
      if($response[$i]['Tipo'] == $tipo){
        if( ($PrecioComparar[$i] >= $minimo) && ($PrecioComparar[$i] <= $ma) ){
          $completo[$contador]['Direccion'] = $response[$i]['Direccion'];
          $completo[$contador]['Ciudad'] = $response[$i]['Ciudad'];
          $completo[$contador]['Telefono'] = $response[$i]['Telefono'];
          $completo[$contador]['Codigo_Postal'] = $response[$i]['Codigo_Postal'];
          $completo[$contador]['Tipo'] = $response[$i]['Tipo'];
          $completo[$contador]['Precio'] = $response[$i]['Precio'];
          $contador++;
        }
      }
    }
  }


}
echo json_encode($completo);
 ?>
