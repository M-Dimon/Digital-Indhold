// Hent overlay for enkel betaling
var modal = document.getElementById("overlay-enkel");

// Knappen der aktivere det første overlay
var btn = document.getElementById("doner-enkelt");

// knappen der lukker overlayet
var span = document.getElementsByClassName("close")[0];

// Når brugeren trykker på knappen åben overlay
btn.onclick = function() {
  modal.style.display = "block";
}


// Overlay for privat persons formen man skal udfylde før betaling af enkelt beløb.
var modal1 = document.getElementById("privat-form-enkel");

// Knappen der sender en til formen som privat personer skal udfylde
var btn1 = document.getElementById("privat-enkelt");

// knappen der lukker overlayet
var span1 = document.getElementsByClassName("close")[1];

// Når brugeren trykker på knappen åben overlay
btn1.onclick = function() {
  modal1.style.display = "block";
  modal.style.display = "none";
}


//Overlayet for betalings typer, hvor man vælger enten mobilepay eller kreditkort.
var modal2 = document.getElementById("betal-type-enkel");

// knappen der sender en til vælg betalings metode efter man har udfyldt privat persons formen.
var btn2 = document.getElementById("betaling-enkel");

// knappen der lukker overlayet
var span2 = document.getElementsByClassName("close")[2];

// Når brugeren trykker på knappen åben overlay
btn2.onclick = function() {
  modal2.style.display = "block";
  modal1.style.display = "none";
}


// Overlay for enkelt betaling via mobilepay
var modal3 = document.getElementById("mobilepay-betaling-enkel");

// knappen der sender en til mobile pay betalings siden
var btn3 = document.getElementById("mobilepay-enkel");

// knappen der lukker overlayet
var span3 = document.getElementsByClassName("close")[3];

// Når brugeren trykker på knappen åben overlay
btn3.onclick = function() {
  modal3.style.display = "block";
  modal2.style.display = "none";
}


// Overlay med tak for støtte besked mobilepay privat enkelt betaling
var modal4 = document.getElementById("tak-støtte");

// knappen der sender en tak for støtte side.
var btn4 = document.getElementById("betal-mobilepay");

// knappen der lukker overlayet
var span4 = document.getElementsByClassName("close")[4];

// Når brugeren trykker på knappen åben overlay
btn4.onclick = function() {
  modal4.style.display = "block";
  modal3.style.display = "none";
}


// Overlay for enkel betaling med kreditkort
var modal5 = document.getElementById("betal-kreditkort-enkelt");

// knappen der sender en tak for støtte side.
var btn5 = document.getElementById("kreditkort-enkel");

// knappen der lukker overlayet
var span5 = document.getElementsByClassName("close")[5];

// Når brugeren trykker på knappen åben overlay
btn5.onclick = function() {
  modal5.style.display = "block";
  modal1.style.display = "none";
}


// Overlay med tak for støtte besked kreditkort privat enkelt betaling
var modal6 = document.getElementById("tak-støtte");

// knappen der sender en tak for støtte side.
var btn6 = document.getElementById("betal-kreditkort");

// knappen der lukker overlayet
var span6 = document.getElementsByClassName("close")[6];

// Når brugeren trykker på knappen åben overlay
btn6.onclick = function() {
  modal6.style.display = "block";
  modal5.style.display = "none";
}


// Hent overlay for årlig betaling
var modal7 = document.getElementById("overlay-årlig");

// Knappen der aktivere det første overlay
var btn7 = document.getElementById("doner-årlig");

// knappen der lukker overlayet
var span7 = document.getElementsByClassName("close")[7];

// Når brugeren trykker på knappen åben overlay
btn7.onclick = function() {
  modal7.style.display = "block";
}


// Overlay for privat persons formen man skal udfylde før betaling, årlig.
var modal8 = document.getElementById("privat-form-årlig");

// Knappen der sender en til formen som privat personer skal udfylde
var btn8 = document.getElementById("privat-årlig");

// knappen der lukker overlayet
var span8 = document.getElementsByClassName("close")[8];

// Når brugeren trykker på knappen åben overlay
btn8.onclick = function() {
  modal8.style.display = "block";
  modal7.style.display = "none";
}


// Overlay for kreditkort formen man skal udfylde før betaling, årlig.
var modal9 = document.getElementById("betal-kreditkort-årlig");

// Knappen der sender en til formen som privat personer skal udfylde
var btn9 = document.getElementById("privat-betaling-årlig");

// knappen der lukker overlayet
var span9 = document.getElementsByClassName("close")[9];

// Når brugeren trykker på knappen åben overlay
btn9.onclick = function() {
  modal9.style.display = "block";
  modal8.style.display = "none";
}


// Overlay med tak for støtte besked privat årlig betaling
var modal10 = document.getElementById("tak-støtte");

// knappen der sender en tak for støtte side.
var btn10 = document.getElementById("betal-privat-årlig");

// knappen der lukker overlayet
var span10 = document.getElementsByClassName("close")[10];

// Når brugeren trykker på knappen åben overlay
btn10.onclick = function() {
  modal10.style.display = "block";
  modal9.style.display = "none";
}


// Overlay for virksomhedes formen man skal udfylde før betaling af enkelt beløb.
var modal11 = document.getElementById("virksomhed-form-enkel");

// Knappen der sender en til formen som virksomhederne skal udfylde
var btn11 = document.getElementById("virksomhed-enkelt");

// knappen der lukker overlayet
var span11 = document.getElementsByClassName("close")[11];

// Når brugeren trykker på knappen åben overlay
btn11.onclick = function() {
  modal11.style.display = "block";
  modal.style.display = "none";
}


// Overlay med tak for støtte besked virksomhed enkel betaling
var modal12 = document.getElementById("tak-støtte");

// knappen der sender en tak for støtte side.
var btn12 = document.getElementById("virksomhed-betal-enkel");

// knappen der lukker overlayet
var span12 = document.getElementsByClassName("close")[12];

// Når brugeren trykker på knappen åben overlay
btn12.onclick = function() {
  modal12.style.display = "block";
  modal11.style.display = "none";
}


// Overlay for virksomhedes formen man skal udfylde før betaling af årligt beløb.
var modal13 = document.getElementById("virksomhed-form-årlig");

// Knappen der sender en til formen som virksomhederne skal udfylde
var btn13 = document.getElementById("virksomhed-årlig");

// knappen der lukker overlayet
var span13 = document.getElementsByClassName("close")[13];

// Når brugeren trykker på knappen åben overlay
btn13.onclick = function() {
  modal13.style.display = "block";
  modal7.style.display = "none";
}


// Overlay med tak for støtte besked virksomhed årlig betaling
var modal14 = document.getElementById("tak-støtte");

// knappen der sender en tak for støtte side.
var btn14 = document.getElementById("virksomhed-betal-årlig");

// knappen der lukker overlayet
var span14 = document.getElementsByClassName("close")[14];

// Når brugeren trykker på knappen åben overlay
btn14.onclick = function() {
  modal14.style.display = "block";
  modal13.style.display = "none";
}


// Når brugeren klikker uden for overlayet, så lukker det, samme regl for alle de forskellige else if.
window.onclick = function(event) {
  if (event.target == modal || event.target == span) {
    modal.style.display = "none";
  }
  else if (event.target == modal1 || event.target == span1) {
    modal1.style.display = "none";
  }
  else if (event.target == modal2 || event.target == span2) {
    modal2.style.display = "none";
  }
  else if (event.target == modal3 || event.target == span3) {
    modal3.style.display = "none";
  }
  else if (event.target == modal4 || event.target == span4) {
    modal4.style.display = "none";
  }
  else if (event.target == modal5 || event.target == span5) {
    modal5.style.display = "none";
  }
  else if (event.target == modal6 || event.target == span6) {
    modal6.style.display = "none";
  }
  else if (event.target == modal7 || event.target == span7) {
    modal7.style.display = "none";
  }
  else if (event.target == modal8 || event.target == span8) {
    modal8.style.display = "none";
  }
  else if (event.target == modal9 || event.target == span9) {
    modal9.style.display = "none";
  }
  else if (event.target == modal10 || event.target == span10) {
    modal10.style.display = "none";
  }
  else if (event.target == modal11 || event.target == span11) {
    modal11.style.display = "none";
  }
  else if (event.target == modal12 || event.target == span12) {
    modal12.style.display = "none";
  }
  else if (event.target == modal13 || event.target == span13) {
    modal13.style.display = "none";
  }
  else if (event.target == modal14 || event.target == span14) {
    modal14.style.display = "none";
  }
}

// js for udfyldnings form.

const setActive = (el, active) => {
  const formField = el.parentNode.parentNode
  if (active) {
    formField.classList.add('form-field--is-active')
  } else {
    formField.classList.remove('form-field--is-active')
    el.value === '' ?
      formField.classList.remove('form-field--is-filled') :
      formField.classList.add('form-field--is-filled')
  }
}

[].forEach.call(
  document.querySelectorAll('.form-field__input, .form-field__textarea'),
  (el) => {
    el.onblur = () => {
      setActive(el, false)
    }
    el.onfocus = () => {
      setActive(el, true)
    }
  }
)
