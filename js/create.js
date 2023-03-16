// Название объекта //

let objectType = "Stan-Apartman";
let offerType = "na prodaju";
function giveName() {
  document.getElementById('object-name').value = `${objectType} ${offerType}`;
}
giveName();

// Выбор локаций //

// Раскрытие блоков внутренних локаций регионов
function initInteriorLocationsTeg(teg) {
  let i;
  let location = document.getElementById(teg);
  let iteriorLocation = document.getElementById(teg + '-interior');
  if (location.style.order == '1') {
    iteriorLocation.style.display = 'none';
    location.style.order = '0';
    location.style.width = '43%';
    let nodeList = document.querySelectorAll('.location-search .region');
    let length = nodeList.length;
    for (i = 0; i < length; i++) {
      nodeList[i].classList.remove('location__defocus');
    }
  } else {
    let nodeList = document.querySelectorAll('.location-search .region');
    let length = nodeList.length;
    for (i = 0; i < length; i++) {
      nodeList[i].style.order = '0';
      nodeList[i].style.width = '43%';
      nodeList[i].classList.add('location__defocus');
    }
    let interiorLocationsNodeList = document.querySelectorAll('.interior__locations');
    let interiorLocationslength = interiorLocationsNodeList.length;
    for (i = 0; i < interiorLocationslength; i++) {
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
  let i;
  let location = document.getElementById(teg);
  let region = String(location.parentElement.id).split('-');
  let regionPopped = region.pop();
  region = region.join(' ');
  let locationField = document.getElementById(teg + '-label');
  let selectedLocation = document.getElementById('selected-location');
  if (location.classList.contains('add__location')) {
    if (locationField.classList.contains('visually-hidden')) {
      locationField.classList.remove('visually-hidden');
    } else {
      locationField.classList.add('visually-hidden');
    }
  } else {
    let nodeList = document.querySelectorAll('.location__label');
    let length = nodeList.length;
    for (i = 0; i < length; i++) {
      nodeList[i].classList.add('visually-hidden');
    }
  }
  if (location.classList.contains('teg-search__activated')) {
    location.classList.remove('teg-search__activated');
    selectedLocation.innerHTML = '</br>';
    objectLocation = "";
  } else {
    let nodeList = document.querySelectorAll('.location');
    let length = nodeList.length;
    for (i = 0; i < length; i++) {
      nodeList[i].classList.remove('teg-search__activated');
    }
    if (!location.classList.contains('add__location')) {
      location.classList.add('teg-search__activated');
      selectedLocation.innerHTML = `${region} (&nbsp;${location.innerHTML}&nbsp;)`
    }
  }
  giveName();
}
// Добавить новый регион
function addRegion(teg) {
  let value = document.getElementById(teg + '-field').value.toLowerCase();
  value = value[0].toUpperCase() + value.slice(1); // Первая буква заглавная
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
// Добавить новую локацию
function addLocation(div, teg) {
  let button = document.getElementById(teg);
  let value = document.getElementById(teg + '-field').value.toLowerCase();
  value = value[0].toUpperCase() + value.slice(1); // Первая буква заглавная
  document.getElementById(teg + '-label').classList.add('visually-hidden');
  button.classList.remove('teg-search__activated');
  button.classList.add('visually-hidden');
  document.getElementById(div).innerHTML +=
    `<button type="button" class="location" id="${value}" onclick="initLocationTeg('${value}')">${value}</button>`;
  initLocationTeg(`${value}`);
}

// Типы сделки //

let rent = document.getElementById('rent');
let sale = document.getElementById('sale');
let idType = "PR";
let rentPriceSpecification = document.getElementById('rent-price-specification');
// Активация тега продажи
function initSale() {
  rent.classList.remove('teg-search__activated');
  sale.classList.add('teg-search__activated');
  offerType = "na prodaju";
  idType = "PR";
  rentPriceSpecification.innerHTML = "";
  giveName();
}
// Активация тега аренды
function initRent() {
  sale.classList.remove('teg-search__activated');
  rent.classList.add('teg-search__activated');
  offerType = "za iznajmljivanje";
  idType = "IZ";
  rentPriceSpecification.innerHTML = "mjesečno";
  giveName();
}

// Типы объектов //

// Активация тега типа объекта
function initObjectTeg(teg) {
  let button = document.getElementById(teg);
  let nodeList = document.querySelectorAll('.type-of-objects .teg-search');
  let length = nodeList.length;
  for (let i = 0; i < length; i++) {
    nodeList[i].classList.remove('teg-search__activated');
  }
  button.classList.add('teg-search__activated');
  objectType = button.innerHTML;
  giveName();
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

// Добавить фото и видео //

// Главное фото
const mainOutput = document.getElementById("main-image__preview");
const mainInput = document.getElementById("main-image");
const allowedImagesTypes = ["image/png", "image/jpeg", "image/gif", "image/pjpeg"];
const allowedVideosTypes = ["video/mpeg", "video/mp4", "video/ogg", "video/quicktime", "video/webm", "video/x-ms-wmv", "video/x-flv", "video/x-msvideo", "video/3gpp", "video/3gpp2"];
let mainImage = [];
let trashbox = [];
// Добавить главное фото
mainInput.addEventListener("change", () => {
  mainImage = [];
  let file = mainInput.files[0];
  if (allowedImagesTypes.includes(file.type)) {
    mainImage.push(file);
  } else {
    trashbox.push(file);
  }
  trashbox = [];
  displayImage()
  commonInput.value = null; // Позволит загрузить один и тот же файл подряд
});
// Отобразить главное фото
let fotosUrls = [];
function displayImage() {
  let images = "";
  mainImage.forEach((image, index) => {
    fotosUrls.push(URL.createObjectURL(image));
    images = `<div class="image">
                <img src="${URL.createObjectURL(image)}" alt="image">
                <span onclick="deleteImage(${index})">&times;</span>
              </div>`
  });
  mainOutput.innerHTML = images;
  if (images.length > 0) {
    document.getElementById('main-image__label').innerHTML = 'Zamijenite glavnu fotografiju';
    document.getElementById('single__upload-image').classList.add('visually-hidden');
  }
}
// Удалить главное фото
function deleteImage(index) {
  mainImage.splice(index, 1);
  displayImage();
  document.getElementById('main-image__label').innerHTML = 'Dodajte jednu glavnu fotografiju';
  document.getElementById('single__upload-image').classList.remove('visually-hidden');
}

// Остальные фото и видео
const commonOutput = document.getElementById("images__previews");
const commonInput = document.getElementById("images");
let commonImagesArray = [];
let commonVideosArray = [];
// Добавить остальные фото и видео
commonInput.addEventListener("change", () => {
  let files = commonInput.files;
  for (let i = 0; i < files.length; i++) {
    if (allowedImagesTypes.includes(files[i].type)) {
      commonImagesArray.push(files[i]);
    } else if (allowedVideosTypes.includes(files[i].type)) {
      commonVideosArray.push(files[i]);
    } else {
      trashbox.push(files[i]);
    }
  }
  trashbox = [];
  displayImages()
  commonInput.value = null; // Позволит загрузить один и тот же файл подряд
});
// Отобразить остальные фото и видео
let videosUrls = [];
function displayImages() {
  let files = "";
  commonImagesArray.forEach((image, index) => {
    fotosUrls.push(URL.createObjectURL(image));
    files += `<div class="image">
                <img src="${URL.createObjectURL(image)}" alt="image">
                <span onclick="deleteImages(${index})">&times;</span>
              </div>`
  });
  commonVideosArray.forEach((video, index) => {
    videosUrls.push(URL.createObjectURL(video));
    files += `<div class="video">
                <video src="${URL.createObjectURL(video)}" alt="video" width="100%" height="100%"></video>
                <span onclick="deleteVideos(${index})">&times;</span>
              </div>`
  });
  if (commonImagesArray.length + commonVideosArray.length > 1) {
    files += `<img class="delete-image" id="multiple__delete-image"
                onclick="multipleDeleteImages()">`
  }
  commonOutput.innerHTML = files;
  if (files.length > 0) {
    document.getElementById('images__label').innerHTML = 'Dodajte još foto i video';
    document.getElementById('multiple__upload-image').classList.add('visually-hidden');
  }
}
// Удалить фотографию
function deleteImages(index) {
  commonImagesArray.splice(index, 1);
  displayImages();
  if (commonImagesArray.length == 0 && commonVideosArray.length == 0) {
    multipleDeleteImages();
  }
}
// Удалить видео
function deleteVideos(index) {
  commonVideosArray.splice(index, 1);
  if (commonVideosArray.length == 0 && commonImagesArray.length == 0) {
    multipleDeleteImages();
  } else {
    displayImages();
  }
}
// Удалить все остальные фото и видео
function multipleDeleteImages() {
  commonImagesArray = [];
  commonVideosArray = [];
  displayImages();
  document.getElementById('images__label').innerHTML = 'Dodajte sve foto i video';
  document.getElementById('multiple__upload-image').classList.remove('visually-hidden');
}

// Драг & Дроп фото и видео //

// Драг & Дроп главного фото
let dropZoneSingle = document.getElementById('single__upload');
// Отмена действий браузера по умолчанию
;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropZoneSingle.addEventListener(eventName, singlePreventDefaults, false);
})
function singlePreventDefaults (event) {
  event.preventDefault();
  event.stopPropagation();
}
// Активация анимации (драг) главного фото
;['dragenter', 'dragover'].forEach(eventName => {
  dropZoneSingle.addEventListener(eventName, singleHighlight, false);
})
function singleHighlight(event) {
  dropZoneSingle.classList.add('dragover');
}
// Деактивация анимации (драг) главного фото
;['dragleave', 'drop'].forEach(eventName => {
  dropZoneSingle.addEventListener(eventName, singleUnhighlight, false);
})
function singleUnhighlight(event) {
  dropZoneSingle.classList.remove('dragover');
}
// Добавить (дроп) главное фото
dropZoneSingle.addEventListener('drop', singleDrop, false);
function singleDrop(event) {
  let file = event.dataTransfer.files[0];
  mainImage = [];
  if (allowedImagesTypes.includes(file.type)) {
    mainImage.push(file);
  } else {
    trashbox.push(file);
  }
  trashbox = [];
  displayImage()
  commonInput.value = null; // Позволит загрузить один и тот же файл подряд
}

// Драг & Дроп остальных фото и видео
let dropZoneMultiple = document.getElementById('multiple__upload');
// Отмена действий браузера по умолчанию
;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropZoneMultiple.addEventListener(eventName, multiplePreventDefaults, false);
})
function multiplePreventDefaults (event) {
  event.preventDefault();
  event.stopPropagation();
}
// Активация анимации (драг) остальных фото и видео
;['dragenter', 'dragover'].forEach(eventName => {
  dropZoneMultiple.addEventListener(eventName, multipleHighlight, false)
})
function multipleHighlight(event) {
  dropZoneMultiple.classList.add('dragover');
}
// Деактивация анимации (драг) остальных фото и видео
;['dragleave', 'drop'].forEach(eventName => {
  dropZoneMultiple.addEventListener(eventName, multipleUnhighlight, false)
})
function multipleUnhighlight(event) {
  dropZoneMultiple.classList.remove('dragover');
}
// Добавить (дроп) остальные фото и видео
dropZoneMultiple.addEventListener('drop', multipleDrop, false);
function multipleDrop(event) {
  let data = event.dataTransfer;
  let files = data.files;
  for (let i = 0; i < files.length; i++) {
    if (allowedImagesTypes.includes(files[i].type)) {
      commonImagesArray.push(files[i]);
    } else if (allowedVideosTypes.includes(files[i].type)) {
      commonVideosArray.push(files[i]);
    } else {
      trashbox.push(files[i]);
    }
  }
  trashbox = [];
  displayImages()
  commonInput.value = null; // Позволит загрузить один и тот же файл подряд
}

// Предпросмотр карточки объекта //


function objectPreview() {
  // Дата создания карточки объекта
  const months = ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'];
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = months[String(today.getMonth())];
  const year = today.getFullYear();
  let date = `${day} ${month} ${year}`;

  // ID присваиваемый новой карточке объекта

  // Добавление фото и видео
  let slideShow = "";
  let dots = "";
  function createSlideShow() {
    let fotosUrlsLength = fotosUrls.length;
    let videosUrlsLength = videosUrls.length;
    let filesLength = fotosUrlsLength + videosUrlsLength;
    for (let i = 0; i < fotosUrlsLength; i++) {
      slideShow += `<div class="slide fade" onclick="resizeSlideShow()">
                      <div class="numbertext">${i + 1} / ${filesLength}</div>
                      <img class="post__image" src="${fotosUrls[i]}" alt="foto">
                      <div class="slide__text"></div>
                    </div>`
    }
    for (let i = 0; i < videosUrlsLength; i++) {
      slideShow += `<div class="slide fade" onclick="resizeSlideShow()">
                      <div class="numbertext">${fotosUrlsLength + 1 + i} / ${filesLength}</div>
                      <video class="post__image post__video" src="${videosUrls[i]}" autoplay loop controls></video>
                      <div class="slide__text"></div>
                    </div>`
    }
    for (let i = 0; i < filesLength; i++) {
      dots += `<span class="dot" onclick="currentSlide(${i + 1})"></span> `
    }
  }
  createSlideShow();

  document.querySelector('html').innerHTML =
  `<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pregled kartice objekta</title>
    <link rel="shortcut icon" href="svg/title-logo-bw.svg" type="image/x-icon">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/id.css">
  </head>
  <body>
    <header class="header">
      <div class="header__container">
        <h1 class="header__title">Pregled kartice objekta</h1>
      </div>
    </header>
    <div class="page-content">
      <h2 class="page-content-title">${document.getElementById('selected-location').innerHTML} : ${document.getElementById('object-name').value}</h2>
      <main class="main">
        <article class="post">
          <div class="slideshow__wrapper">
            <div class="slideshow-container" id="slideshow">
              ${slideShow}
              <button class="slideshow__button" id="prev" onclick="plusSlides(-1)">&#10094;</button>
              <button class="slideshow__button" id="next" onclick="plusSlides(1)">&#10095;</button>
            </div>
            <div class="dots__container" id="dots">
              ${dots}
            </div>
          </div>
          <div class="post__content">
            <div class="post__infos">
              <div class="post__info">
                <h3 class="id-title">Publikacija: </h3>
                <time class="post__datetime" datetime="2019-12-13">${date}</time>
              </div>
              <div class="post__info">
                <h3 class="id-title">Broj objekta: </h3>
                <div class="object__id">${idType}00002</div>
              </div>
            </div>
            <div class="post__lead">
              <h3 class="id-title">Opis: </h3>
              <p>
                ${document.getElementById('object-description').value}
              </p>
            </div>
            <div class="specifications">
              <div class="specification">
                <h3 class="specification-title">Broj soba</h3>
                <div class="specification__box">
                  <p class="specification-icon specification__rooms"></p>
                  <p class="specification-text"> = ${document.getElementById('rooms number').value}</p>
                </div>
              </div>
              <div class="specification">
                <h3 class="specification-title">Broj kupatila</h3>
                <div class="specification__box">
                  <p class="specification-icon specification__baths"></p>
                  <p class="specification-text"> = ${document.getElementById('bathrooms number').value}</p>
                </div>
              </div>
              <div class="specification">
                <h3 class="specification-title">Broj terase</h3>
                <div class="specification__box">
                  <p class="specification-icon specification__terrace"></p>
                  <p class="specification-text"> = ${document.getElementById('terraces number').value}</p>
                </div>
              </div>
              <div class="specification">
                <h3 class="specification-title">Dvorište</h3>
                <div class="specification__box">
                  <p class="specification-icon specification__yard"></p>
                  <p class="specification-text"> = ${document.getElementById('yard area').value} m<sup>2</sup></p>
                </div class="specification">
              </div>
              <div class="specification">
                <h3 class="specification-title">Kvadratura</h3>
                <div class="specification__box">
                  <p class="specification-icon specification__square"></p>
                  <p class="specification-text"> = ${document.getElementById('object area').value} m<sup>2</sup></p>
                </div>
              </div>
              <div class="specification">
                <h3 class="specification-title">Parking</h3>
                <div class="specification__box">
                  <p class="specification-icon specification__parking"></p>
                  <p class="specification-text"> = ${document.querySelector('input[name="Parking"]:checked').value}</p>
                </div>
              </div>
              <div class="specification">
                <h3 class="specification-title">Cijena ${rentPriceSpecification.innerHTML}</h3>
                <div class="specification__box">
                  <p class="specification-icon specification__price"></p>
                  <p class="specification-text"> = ${Intl.NumberFormat('ru-RU').format(document.getElementById('price').value)}</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <button type="submit" class="create__card" onclick="">
        <span class="visually-hidden">Кнопка создания карточки объекта</span>
        Kreirajte karticu objekta
      </button>
    </div>
    <div id="callback-button"></div>
    <script src="js/slideshow.js"></script>
  </body>`;
}

//-2. Поправить filter.js
//-1. Добавить текст
// 0. Безопасность
// 1. Полиязычность
// 2. Поиск по сайту
// 3. Анимация трендов
// 4. Адаптация Create и предпросмотр
// 5. Работа фильтра в реальном времени
