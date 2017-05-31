var nombreColores = ['White','LightYellow',
    'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin','PeachPuff', 'PaleGoldenrod',  'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
'Pink', 'LightPink','HotPink', 'DeepPink', 'MediumVioletRed','Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
 'Brown','Sienna','SaddleBrown', 'IndianRed', 'RosyBrown',
'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
'Chocolate',  'DarkKhaki','DarkSeaGreen', 'MediumAquaMarine',
    'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green','DarkGreen','OliveDrab','Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
'LightGreen', 'PaleGreen', 'PaleTurquoise',
'AquaMarine',  'Cyan','Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew','LightCyan',
'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
'Plum', 'Violet', 'Orchid','DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
'BlueViolet', 'DarkViolet', 'DarkOrchid',
 'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
    'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'];

// Variable jQuery para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var $colorPersonalizado = $('#color-personalizado');
var $indicadorDeColor = $("#indicador-de-color");
var $baldePintura = $("#baldePintura");

$colorPersonalizado.change(function(){
  // Se guarda el color de la rueda en colorActual
  colorActual = $colorPersonalizado.val();
  // Completar para que cambie el indicador-de-color al colorActual
  $indicadorDeColor.css("background-color", colorActual);
  $baldePintura.css("background-color", colorActual);
});

///////////////////////////////////////////////////////////////
//CODIGO PROPIO
//Crear Paleta de colores
var $paleta = $("#paleta");

function nuevoColor(currentValue) {
	var nuevoColor = currentValue;
		nuevoColor = $("<div>", {"class": "color-paleta"});
		nuevoColor.css("background-color", currentValue);
		$paleta.append(nuevoColor);
};

nombreColores.forEach(nuevoColor);	

//Crear grilla de pixeles
var $grillaDePixeles = $("#grilla-pixeles");

function crearGrilla(){
	for (var i = 0; i < 1749; i++) {
		var nuevoPixel = $("<div>", {});
		$grillaDePixeles.append(nuevoPixel);
	}
};
crearGrilla();

//Eleccion color paleta
function eleccionColorPaleta(){
	var colorActual = $(this).css("background-color");
	$indicadorDeColor.css("background-color", colorActual);
	$baldePintura.css("background-color", colorActual);
	//$colorPersonalizado.attr("value", colorActual); tiene que ser hexadecimal? =(
};

$paleta.children(".color-paleta").click(eleccionColorPaleta);

//Pintar pixeles en la grilla
var $pixel = $grillaDePixeles.children();

function pintarPixelesGrilla(){
	if (mouseClickStatus==true) {
	var colorDefondo = $indicadorDeColor.css("background-color");
	$(this).css("background-color", colorDefondo);}
};

//Variable para detectar si el click esta activado o no
var mouseClickStatus = false;

function clickMouse(){
	mouseClickStatus = true;
}
function upMouse(){
	mouseClickStatus = false;
}
// Detectar movimientos del mouse
$(document).on("mousedown", clickMouse);
$(document).on("mouseup", upMouse);
$("#grilla-pixeles div").on("mousemove", pintarPixelesGrilla);

//Borrar todo!!!!
function borrarTodo(){
	$("#grilla-pixeles").css("background-color", "White").effect("fade");
	$("#grilla-pixeles div").css("background-color", "White");
}

//FUNCIONES EXTRAS & CHIMI

function pintarConBalde() {
	var colorActual = $baldePintura.css("background-color");
	$("#grilla-pixeles div").css("background-color", colorActual);
}
////////////////////////////////////////////
////////// touch!
///////
/* == GLOBAL DECLERATIONS == */
    TouchMouseEvent = {
        DOWN: "touchmousedown",
        UP: "touchmouseup",
        MOVE: "touchmousemove"
    }
   
    /* == EVENT LISTENERS == */
    var onMouseEvent = function(event) {
        var type;
        
        switch (event.type) {
            case "mousedown": type = TouchMouseEvent.DOWN; break;
            case "mouseup":   type = TouchMouseEvent.UP;   break;
            case "mousemove": type = TouchMouseEvent.MOVE; break;
            default: 
                return;
        }
        
        var touchMouseEvent = normalizeEvent(type, event, event.pageX, event.pageY);      
        $(event.target).trigger(touchMouseEvent); 
    }
    
    var onTouchEvent = function(event) {
        var type;
        
        switch (event.type) {
            case "touchstart": type = TouchMouseEvent.DOWN; break;
            case "touchend":   type = TouchMouseEvent.UP;   break;
            case "touchmove":  type = TouchMouseEvent.MOVE; break;
            default: 
                return;
        }
        
        var touch = event.originalEvent.touches[0];
        var touchMouseEvent;
        
        if (type == TouchMouseEvent.UP) 
            touchMouseEvent = normalizeEvent(type, event, null, null);
        else 
            touchMouseEvent = normalizeEvent(type, event, touch.pageX, touch.pageY);
        
        $(event.target).trigger(touchMouseEvent); 
    }
    
    /* == NORMALIZE == */
    var normalizeEvent = function(type, original, x, y) {
        return $.Event(type, {
            pageX: x,
            pageY: y,
            originalEvent: original
        });
    }
    
    /* == LISTEN TO ORIGINAL EVENT == */
    var jQueryDocument = $(document);
   
    if ("ontouchstart" in window) {
        jQueryDocument.on("touchstart", onTouchEvent);
        jQueryDocument.on("touchmove", onTouchEvent);
        jQueryDocument.on("touchend", onTouchEvent); 
    } else {
        jQueryDocument.on("mousedown", onMouseEvent);
        jQueryDocument.on("mouseup", onMouseEvent);
        jQueryDocument.on("mousemove", onMouseEvent);
    }