
 document.forms["main-form"].addEventListener("submit", send_form);

function send_form(e) {
  
  e.preventDefault();

  var form = document.forms["main-form"];

  var message = form["message-input"];

  var repeat = form["repeat-input"];

  var delay = form["delay-input"];

  var sended = 0;

  var interval = setInterval(function () {

    sended += 1;

    if(sended == repeat){
      clearInterval(interval);
    }

    send_message(message);

  }, delay);



}

function send_message(message) {

  window.InputEvent = window.Event || window.InputEvent;

  var event = new InputEvent('input', {
    bubbles: true
  });

  var textbox = document.querySelector('div._2S1VP');

  textbox.textContent = message;
  textbox.dispatchEvent(event);

  document.querySelector("button._35EW6").click();

}
