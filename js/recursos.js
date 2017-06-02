// No modifiques estas funciones a menos que sepas MUY BIEN lo que estas haciendo!


// Abre una ventana para guardar nuestro arte en un archivo pixel-art.png
function guardarPixelArt(){
  html2canvas($grillaDePixeles, {
      onrendered: function(canvas) {
          theCanvas = canvas;
          canvas.toBlob(function(blob) {
             saveAs(blob, "pixel-art.png");
          });
      }
  });
}

// Carga a un superheroe.
// El superheroe está guardado en un formato especial llamado json, pero no
// hay que preocuparse de eso por el momento
function cargarSuperheroe(superheroe){
  var elementoHeroe = toDOM(superheroe);
  var el = $('#grilla-pixeles').replaceWith(elementoHeroe);
  $("#grilla-pixeles div").mousemove(pintarPixelesMoviendo);
  $("#grilla-pixeles div").click(pintarPixelesGrilla);
  return elementoHeroe;
}
