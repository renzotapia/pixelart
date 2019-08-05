var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];



var paleta = document.getElementById("paleta");

var grillaPixeles = document.getElementById("grilla-pixeles");



function crearPaletaColores(){
  for (i=0; i<nombreColores.length; i++){
    (crearColor());
  }
}

function crearColor(){
  var divColor = document.createElement("div");
  divColor.className= "color-paleta";
  divColor.style.backgroundColor = nombreColores[i];
  paleta.appendChild(divColor)
}

function crearGrilla(){
  for (i=1; i<1750; i++){
    crearPixel();
  }
}

function crearPixel(){
  var divPixel = document.createElement("div");
  divPixel.className= "pixel";
  grillaPixeles.appendChild(divPixel)
}


var colorSel= document.getElementById("indicador-de-color");
paleta.addEventListener("click", mostrarColor);

function mostrarColor(e) {
  colorSel.style.backgroundColor = e.target.style.backgroundColor;
}

grillaPixeles.addEventListener("click", pintarPixel);

function pintarPixel(e) {
  e.target.style.backgroundColor= colorSel.style.backgroundColor
}

grillaPixeles.addEventListener("mousedown", apretarMouse);
function apretarMouse(e){
  e.target.style.backgroundColor= colorSel.style.backgroundColor;
  this.addEventListener("mousemove", apretarMouse);
}

grillaPixeles.addEventListener("mouseup", soltarMouse);
function soltarMouse(){
  this.removeEventListener("mousemove", apretarMouse);
}


// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function () {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual 
    colorSel.style.backgroundColor=colorActual;
  })
);

$(document).ready( function carga() {
  crearGrilla();
  crearPaletaColores();
});


var botonBorrar = document.getElementById("borrar");

botonBorrar.addEventListener("click", borrarTodo)

function borrarTodo(){
  var $pixeles = $("#grilla-pixeles div");
  $pixeles.animate({"background-color":"white"},1500);
}
