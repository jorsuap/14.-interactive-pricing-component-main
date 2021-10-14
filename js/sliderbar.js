//Definicion de variables y acceso al DOM
var slider = document.getElementById("range");
var output = document.getElementsByClassName("price-permonth")[0];
var output1 = document.getElementsByClassName("price-permonth")[1];
var pages = document.getElementsByClassName("pages-permonth")[0];
var checkbox = document.getElementsByClassName("toggle")[0];
var year = document.getElementsByClassName("month")[0];
output.innerHTML = "$" + slider.value + ".00";
output1.innerHTML = "$" + slider.value + ".00";
pages.innerHTML = slider.value * 6.25 + " K";
var descuesnto = 0;
var rango = 16;

//En este fragmento de codigo se da solucion al problema de las sLIDER BAR para Chrome, ya que no tiene acceso 
//a a editar o manipular el progreso de la barra...
slider.style.background = "linear-gradient(to right, hsl(174, 77%, 80%) " + slider.value / 32 * 100 +
   "%, hsl(224, 65%, 95%) " + slider.value / 32 * 100 + "%)";
   // slider.style.background = "hsl(224, 65%, 95%)";

//Funcion para calcular los valores dependiendo de si activa el checkbox---tambien es una redundancia para la funcion principal
checkbox.addEventListener('change', function () {
   if (this.checked) {
      descuesnto = 1;
      year.innerHTML = " /year";
      output.innerHTML = "$ " + ((slider.value * 12) - (slider.value * 12 * 0.25)).toFixed(2);
      output1.innerHTML = "$ " + ((slider.value * 12) - (slider.value * 12 * 0.25)).toFixed(2);
   }
   else{
      year.innerHTML = "  /month";
      descuesnto = 0;
      output.innerHTML = "$ " + ((slider.value / 32) * 32).toFixed(2);
      output1.innerHTML = "$ " + ((slider.value / 32) * 32).toFixed(2);
   }
});

//Funcion que se activa al activar el Slider... y calcula los valores dependiendo del valor del Slider

slider.oninput = function () {

   if(descuesnto == 1){
      output.innerHTML = "$ " + ((this.value * 12) - (this.value * 12 * 0.25)).toFixed(2);
      rango = output.innerHTML;
      output1.innerHTML = "$ " + ((this.value * 12) - (this.value * 12 * 0.25)).toFixed(2);
      rango = output1.innerHTML;
   }
   else{
      output.innerHTML = "$ " + ((this.value / 32) * 32).toFixed(2);
      rango = output.innerHTML;
      output1.innerHTML = "$ " + ((this.value / 32) * 32).toFixed(2);
      rango = output1.innerHTML;
   }
   if (slider.value > 16) {
      pages.innerHTML = parseInt(slider.value * 15.63) + " K";
   } else {
      pages.innerHTML = parseInt(slider.value * 6.25) + " K";
   }
   //Redundancia para modificar la barra de progreso del Slider
   slider.style.background = "linear-gradient(to right, hsl(174, 77%, 80%) " + slider.value / 32 * 100 +
         "%, hsl(224, 65%, 95%) " + slider.value / 32 * 100 + "%)";
}
