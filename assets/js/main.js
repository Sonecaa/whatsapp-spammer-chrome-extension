
document.forms["main-form"].addEventListener("submit", send_form);
$('#alert-box').hide();


function send_form(e) {

  e.preventDefault();

  var form = document.forms["main-form"];

  var message = form["message-input"].value;

  var repeat = form["repeat-input"].value;

  var delay = form["delay-input"].value;

  var sended = 0;

  var interval = setInterval(function () {

    if(sended == repeat){
      clearInterval(interval);
    }

    send_message(message);
    sended += 1;

  }, delay);



}

function send_message(message) {

  window.InputEvent = window.Event || window.InputEvent;

  var event = new InputEvent('input', {
    bubbles: true
  });

  var textbox = document.querySelector('div._2S1VP');

  if (textbox) {

    textbox.textContent = message;
    textbox.dispatchEvent(event);

    document.querySelector("button._35EW6").click();

  } else {

    $('#alert-box').html('Open chat in Whatsapp first...')
    $('#alert-box').show(2000);
    setTimeout( function() { $('#alert-box').hide('2000'); } , 6000);


  }

}
