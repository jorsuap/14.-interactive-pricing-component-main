var slider = document.getElementById("range");
var output = document.getElementsByClassName("price-permonth")[0];
var pages = document.getElementsByClassName("pages-permonth")[0];
output.innerHTML = "$" + slider.value + ".00";
pages.innerHTML = slider.value * 6.25 + " K";

slider.style.background = "linear-gradient(to right, hsl(174, 77%, 80%) " + slider.value / 32 * 100 +
   "%, hsl(224, 65%, 95%) " + slider.value / 32 * 100 + "%)";

slider.oninput = function () {
   if(slider.value > 16){
      pages.innerHTML = parseInt(slider.value * 15.63) + " K";
   }
   else{
      pages.innerHTML = parseInt(slider.value * 6.25) + " K";
   }
   output.innerHTML = "$ " + ((this.value / 32) * 32).toFixed(2);
   rango = output.innerHTML;
   slider.style.background = "linear-gradient(to right, hsl(174, 77%, 80%) " + slider.value / 32 * 100 +
      "%, hsl(224, 65%, 95%) " + slider.value / 32 * 100 + "%)";
   console.log(rango);
}
