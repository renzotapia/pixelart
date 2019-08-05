// No modifiques estas funciones a menos que sepas MUY BIEN lo que estas haciendo!


// Abre una ventana para guardar nuestro arte en un archivo pixel-art.png

var botonGuardar = document.getElementById("guardar");

botonGuardar.addEventListener("click", guardarPixelArt)

function guardarPixelArt() {
  html2canvas($("#grilla-pixeles") , {
    onrendered: function(canvas) {
      theCanvas = canvas;
      canvas.toBlob(function(blob) {
        saveAs(blob, "pixel-art.png");
      });
    }
  });
}

// Carga a un superheroe predefinido


function cargarSuperheroe(superheroe) {
  var $pixeles = $("#grilla-pixeles div");
  for (var i = 0; i < superheroe.length; i++) {
    $pixeles[i].style.backgroundColor = superheroe[i];
  }
}

$("#batman").click(function(){
  cargarSuperheroe(batman);
})

$("#wonder").click(function(){
  cargarSuperheroe(wonder);
})

$("#flash").click(function(){
  cargarSuperheroe(flash);
})

$("#invisible").click(function(){
  cargarSuperheroe(invisible);
})