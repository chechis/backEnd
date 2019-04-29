$(function() {
  $("#selectCiudad").show();
  $("#selectTipo").show();
  $("#mostrarTodos").click(function(event){
    event.preventDefault();
    $.ajax(
      {
        url: './MostrarTodo.php',
        type: 'POST',
        data: {}
      }
    ).done(function(data){
      var obj = JSON.parse(data);
      var conteo = obj.length;
      for(var i = 0; i<conteo; i ++){
        var html = "<div class='row lighten-5 z-depth-1 itemMostrado'><div class='col s3'><img src='img/home.jpg'></div>"
        + "<div class='col s9'>"
        + "<div class='row'>"
        + "<div class='col s2'>"
        + "<h6><strong>Direccion: </strong></h6></div>"
        + "<div class='col s10'>"
        + "<h6 class=''>"+obj[i]["Direccion"]+"</h6></div>"
        + "</div>"
        + "<div class='row'>"
        + "<div class='col s2'>"
        + "<h6><strong>Ciudad: </strong></h6></div>"
        + "<div class='col s10'>"
        + "<h6 class=''>"+obj[i]["Ciudad"]+"</h6></div>"
        + "</div>"
        + "<div class='row'>"
        + "<div class='col s2'>"
        + "<h6 ><strong>Telefono: </strong></h6></div>"
        + "<div class='col s10'>"
        + "<h6 class=''>"+obj[i]["Telefono"]+" </h6></div>"
        + "</div>"
        + "<div class='row'>"
        + "<div class='col s2'>"
        + "<h6 ><strong>Precio: </strong></h6></div>"
        + "<div class='col s10'>"
        + "<h6 class='precioTexto'>"+obj[i]["Precio"]+" </h6></div>"
        + "</div>"
        + "<div class='row'>"
        + "<div class='col s2'>"
        + "<h6 ><strong>Tipo: </strong></h6></div>"
        + "<div class='col s10'>"
        + "<h6 class='tipo'>"+obj[i]["Tipo"]+" </h6></div>"
        + "</div>"
        + "<div class='card-action'>"
        + "<a href='#'>VER MAS</a></div></div></div>";
        $("#identi").append(html);
      }
    })
  });

  $("#submitButton").click(function(event){
    var ciudad = $("#selectCiudad").val();
    var tipo = $("#selectTipo").val();
    var precio = $("#rangoPrecio").val();
    event.preventDefault();
    $.ajax(
      {
        url: './buscador.php',
        type: 'POST',
        data: {ciudad: ciudad,
               tipo: tipo,
               precio: precio
             }
           }
         ).done(function(data){
           var obj = JSON.parse(data);
           var conteo = obj.length;
           for(var i = 0; i<conteo; i ++){
             var html = "<div class='row lighten-5 z-depth-1 itemMostrado'><div class='col s3'><img src='img/home.jpg'></div>"
             + "<div class='col s9'>"
             + "<div class='row'>"
             + "<div class='col s2'>"
             + "<h6><strong>Direccion: </strong></h6></div>"
             + "<div class='col s10'>"
             + "<h6 class='direccion'>"+obj[i]["Direccion"]+"</h6></div>"
             + "</div>"
             + "<div class='row'>"
             + "<div class='col s2'>"
             + "<h6><strong>Ciudad: </strong></h6></div>"
             + "<div class='col s10'>"
             + "<h6 class='ciudad'>"+obj[i]["Ciudad"]+"</h6></div>"
             + "</div>"
             + "<div class='row'>"
             + "<div class='col s2'>"
             + "<h6 ><strong>Telefono: </strong></h6></div>"
             + "<div class='col s10'>"
             + "<h6 class='telefono'>"+obj[i]["Telefono"]+" </h6></div>"
             + "</div>"
             + "<div class='row'>"
             + "<div class='col s2'>"
             + "<h6 ><strong>Precio: </strong></h6></div>"
             + "<div class='col s10'>"
             + "<h6 class='precioTexto Precio'>"+obj[i]["Precio"]+" </h6></div>"
             + "</div>"
             + "<div class='row'>"
             + "<div class='col s2'>"
             + "<h6 ><strong>Tipo: </strong></h6></div>"
             + "<div class='col s10'>"
             + "<h6 class='tipo'>"+obj[i]["Tipo"]+" </h6></div>"
             + "</div>"
             + "<div class='card-action'>"
             + "<a href='#'>VER MAS</a></div></div></div>";
             $("#identi").append(html);
           }
         })
       });
     })
