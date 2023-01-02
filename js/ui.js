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


// 1. Анимация ползунов
// 2. Работа фильтра
// 3. Работа фильтра в реальном времени
// 4. Анимация трендов
// 5. Форма создания КО
// 6. Переместить поиск и подписку в мобайл после агентов
// 7. Подписка на почту
// 8. Поиск по сайту
// 9. Полиязычность
//10.
//11.
