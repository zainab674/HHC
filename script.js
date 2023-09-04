let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
function myFunction1() {
  
  var x = document.getElementById("mission");
  var y = document.getElementById("accountability");
  var z = document.getElementById("vision");
  if(x.style.display=== "none"){
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
  }
  else{
    x.style.display = "none";
  }
  
}
function myFunction2() {
  var x = document.getElementById("mission");
  var y = document.getElementById("accountability");
  var z = document.getElementById("vision");
  if(y.style.display=== "none"){
      y.style.display = "block";
      x.style.display = "none";
      z.style.display = "none";
  }
  else{
    y.style.display = "none";
  }  
  
}
function myFunction3() {
  var x = document.getElementById("mission");
  var y = document.getElementById("accountability");
  var z = document.getElementById("vision");
  if(z.style.display=== "none"){
      z.style.display = "block";
      x.style.display = "none";
      y.style.display = "none";
    }
    else{
      z.style.display = "none";
    } 
}

var button5 = document.getElementById("btn5");
var button10 = document.getElementById("btn10");
var button20 = document.getElementById("btn20");
var button40 = document.getElementById("btn40");

var inputText = document.getElementById("form-amount");
var inputTextMQ = document.getElementById("form-amountMQ")

var amountText = document.getElementById("amount");

button5.onclick = function () {
amountText.innerHTML = "$5.00";
}


button10.onclick = function () {
amountText.innerHTML = "$10.00";
}

button20.onclick = function () {
amountText.innerHTML = "$20.00";
}

button40.onclick = function () {
amountText.innerHTML = "$40.00";
}



inputText.onkeydown = function () { 
	var inputValue = document.getElementById("form-amount").value;
	 var dot = new RegExp(/[.]/);
	 if(dot.test(inputValue)){
	amountText.innerHTML = "$" + inputValue;
	}else{
	amountText.innerHTML = "$" + inputValue + ".00";
}

}


inputText.onkeyup = function () {
	var inputValue = document.getElementById("form-amount").value;
	 var dot = new RegExp(/[.]/);
	 if(dot.test(inputValue)){
	amountText.innerHTML = "$" + inputValue;
	}else{
	amountText.innerHTML = "$" + inputValue + ".00";
}

}

inputText.onclick = function () {
		var inputValue = document.getElementById("form-amount").value;
	 var dot = new RegExp(/[.]/);
	 if(dot.test(inputValue)){
	amountText.innerHTML = "$" + inputValue;
	}else{
	amountText.innerHTML = "$" + inputValue + ".00";
}
}




// media query----------


inputTextMQ.onkeyup = function () {
	var inputValue = document.getElementById("form-amountMQ").value;
	 var dot = new RegExp(/[.]/);
	 if(dot.test(inputValue)){
	amountText.innerHTML = "$" + inputValue;
	}else{
	amountText.innerHTML = "$" + inputValue + ".00";
}

}

