// Выбор локаций //

// Раскрытие блоков внутренних локаций регионов
function initInteriorLocationsTeg(teg) {
  let location = document.getElementById(teg);
  let iteriorLocation = document.getElementById(teg + '-interior');
  if (location.style.order == '1') {
    iteriorLocation.style.display = 'none';
    location.style.order = '0';
    location.style.width = '43%';
    let nodeList = document.querySelectorAll('.location-search .region');
    let length = nodeList.length;
    for (let i = 0; i < length; i++) {
      nodeList[i].classList.remove('location__defocus');
    }
  } else {
    let nodeList = document.querySelectorAll('.location-search .region');
    let length = nodeList.length;
    for (let i = 0; i < length; i++) {
      nodeList[i].style.order = '0';
      nodeList[i].style.width = '43%';
      nodeList[i].classList.add('location__defocus');
    }
    let interiorLocationsNodeList = document.querySelectorAll('.interior__locations');
    let interiorLocationslength = interiorLocationsNodeList.length;
    for (let i = 0; i < interiorLocationslength; i++) {
      interiorLocationsNodeList[i].style.display = 'none';
    }
    location.classList.remove('location__defocus')
    location.style.order = '1';
    location.style.width = '100%';
    iteriorLocation.style.display = 'flex';
  }
}

// Выбор локации
function initLocationTeg(teg) {
  let location = document.getElementById(teg);
  let locationField = document.getElementById(teg + '-label');
  if (location.classList.contains('add__location')) {
    if (locationField.classList.contains('visually-hidden')) {
      locationField.classList.remove('visually-hidden');
    } else {
      locationField.classList.add('visually-hidden');
    }
  } else {
    let nodeList = document.querySelectorAll('.location__label');
    let length = nodeList.length;
    for (let i = 0; i < length; i++) {
      nodeList[i].classList.add('visually-hidden');
    }
  }
  if (location.classList.contains('teg-search__activated')) {
    location.classList.remove('teg-search__activated');
  } else {
    let nodeList = document.querySelectorAll('.location');
    let length = nodeList.length;
    for (let i = 0; i < length; i++) {
      nodeList[i].classList.remove('teg-search__activated');
    }
    if (!location.classList.contains('add__location')) {
      location.classList.add('teg-search__activated');
    }
  }
}

// Типы сделки //

// Тег продажи
let rent = document.getElementById('rent');
let sale = document.getElementById('sale');
function initSale() {
  if (sale.classList.contains('teg-search__activated')) {
    sale.classList.remove('teg-search__activated');
  } else {
    rent.classList.remove('teg-search__activated');
    sale.classList.add('teg-search__activated');
  }
}
// Тег аренды
function initRent() {
  let rent = document.getElementById('rent');
  if (rent.classList.contains('teg-search__activated')) {
    rent.classList.remove('teg-search__activated');
  } else {
    sale.classList.remove('teg-search__activated');
    rent.classList.add('teg-search__activated');
  }
}

// Типы объектов //

// Активация тега типа объекта
function initObjectTeg(teg) {
  let button = document.getElementById(teg);
  if (button.classList.contains('teg-search__activated')) {
    button.classList.remove('teg-search__activated');
  } else {
    let nodeList = document.querySelectorAll('.type-of-objects .teg-search');
    let length = nodeList.length;
    for (let i = 0; i < length; i++) {
      nodeList[i].classList.remove('teg-search__activated');
    }
    button.classList.add('teg-search__activated');
  }
}

// Дополнительные опции //

// Активация дополнительных поисковых опций
function initPatternTeg(teg) {
  let button = document.getElementById(teg);
  if (button.classList.contains('teg-search__activated')) {
    button.classList.remove('teg-search__activated');
  } else {
    button.classList.add('teg-search__activated');
  }
}
// Сброс всех дополнительных поисковых опций
function resetPatterns() {
  let nodeList = document.querySelectorAll('.detail-tags .teg-search');
  let length = nodeList.length;
  for (let i = 0; i < length; i++) {
    nodeList[i].classList.remove('teg-search__activated');
  }
}
// Добавить новый регион
function addRegion(teg) {
  let value = document.getElementById(teg + '-field').value.toLowerCase();
  document.getElementById('regions-buttons').innerHTML +=
    `<button type="button" class="region teg-search__disactivated" id="${value}" onclick="initInteriorLocationsTeg('${value}')">
       ${value}
     </button>`;
  document.getElementById('location-search').innerHTML +=
    `<div class="interior__locations" id="${value}-interior">
       <button type="button" class="location add__location" id="${value}-plus" onclick="initLocationTeg('${value}-plus')">
         + location
       </button>
       <label class="location__label visually-hidden" id="${value}-plus-label">
         <p>(unesite ime i pritisnite ENTER)</p>
         <input type="text" class="field location__field" id="${value}-plus-field" onchange="addLocation('${value}-interior', '${value}-plus')">
       <label>
     </div>`;
   initInteriorLocationsTeg('region-plus');
   document.getElementById(teg).classList.add('visually-hidden');
}
//Добаить новую локацию
function addLocation(div, teg) {
  let button = document.getElementById(teg);
  let value = document.getElementById(teg + '-field').value.toLowerCase();
  document.getElementById(teg + '-label').classList.add('visually-hidden');
  button.classList.remove('teg-search__activated');
  button.classList.add('visually-hidden');
  document.getElementById(div).innerHTML +=
    `<button type="button" class="location teg-search__activated" id="${value}" onclick="initLocationTeg('${value}')">
      ${value}
    </button>`;
}

function createCard() {

}


// 0. Безопасность
// 1. Полиязычность
// 2. Поиск по сайту
// 3. Фулскринслайдшоу - сделать новым объектом???
// 4. Анимация трендов
// 5. Работа фильтра в реальном времени + Анимация ползунов
// 6. Форма создания КО

"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
  if (d < 0) {
    arr = [];
  }
  if (d == 0) {
    let x = -b / (2 * a);
    arr = [x];
  }
  if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr = [x1, x2];
  }
  return arr;
}

﻿
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(parseInt(percent)) == true ||
      isNaN(parseInt(contribution)) == true  ||
      isNaN(parseInt(amount)) == true  ||
      isNaN(parseInt(countMonths)) == true) {
    return false;
  }
  let P = parseInt(percent) / 100 / 12;
  let S = parseInt(amount) - parseInt(contribution);
  let n = parseInt(countMonths);
  let monthlyPayment = S * (P + (P / (Math.pow((1 + P), n) - 1)));
  let totalAmount = Number(monthlyPayment) * n;
  return Number(totalAmount.toFixed(2));
}
