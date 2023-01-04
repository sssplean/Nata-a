// Форма обратной связи //

function openGform(id) {
  document.getElementById(id).style.visibility = 'visible';
  document.getElementById(id).style.opacity = '1';
  document.getElementById('callback-button').style.visibility = 'hidden';
  document.getElementById('callback-button').style.opacity = '0';
}

function closeGform(id) {
  document.getElementById(id).style.visibility = 'hidden';
  document.getElementById(id).style.opacity = '0';
  document.getElementById('callback-button').style.visibility = 'visible';
  document.getElementById('callback-button').style.opacity = '1';}
