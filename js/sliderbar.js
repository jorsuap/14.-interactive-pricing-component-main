var slider = document.getElementById("myRange");
var output = document.getElementsByClassName("price-permonth")[0];
output.innerHTML = parseFloat(slider.value);

slider.oninput = function () {
   output.innerHTML = "$ " + this.value ;
   rango = output.innerHTML;
   console.log(rango.tyof);
}
