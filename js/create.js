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
  let region = String(location.parentElement.id).split('-');
  let regionPopped = region.pop();
  region = region.join(' ');
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
    document.getElementById('location-title').innerHTML = '2. Lokacije';
  } else {
    let nodeList = document.querySelectorAll('.location');
    let length = nodeList.length;
    for (let i = 0; i < length; i++) {
      nodeList[i].classList.remove('teg-search__activated');
    }
    if (!location.classList.contains('add__location')) {
      location.classList.add('teg-search__activated');
      document.getElementById('selected-location').innerHTML = `${region} -${location.innerHTML}`
    }
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
// Добавить новую локацию
function addLocation(div, teg) {
  let button = document.getElementById(teg);
  let value = document.getElementById(teg + '-field').value.toLowerCase();
  document.getElementById(teg + '-label').classList.add('visually-hidden');
  button.classList.remove('teg-search__activated');
  button.classList.add('visually-hidden');
  document.getElementById(div).innerHTML +=
    `<button type="button" class="location" id="${value}" onclick="initLocationTeg('${value}')">
      ${value}
     </button>`;
  initLocationTeg(`${value}`)
}

// Типы сделки //

let rent = document.getElementById('rent');
let sale = document.getElementById('sale');
// Активация тега продажи
function initSale() {
  if (sale.classList.contains('teg-search__activated')) {
    sale.classList.remove('teg-search__activated');
  } else {
    rent.classList.remove('teg-search__activated');
    sale.classList.add('teg-search__activated');
  }
}
// Активация тега аренды
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
function displayImage() {
  let images = "";
  mainImage.forEach((image, index) => {
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
function displayImages() {
  let files = "";
  commonImagesArray.forEach((image, index) => {
    files += `<div class="image">
                <img src="${URL.createObjectURL(image)}" alt="image">
                <span onclick="deleteImages(${index})">&times;</span>
               </div>`
  });
  commonVideosArray.forEach((image, index) => {
    files += `<div class="video">
                <video src="${URL.createObjectURL(image)}" alt="video" width="100%" height="100%"></video>
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


// 0. Безопасность
// 1. Полиязычность
// 2. Поиск по сайту
// 3. Анимация трендов
// 4. Адаптация Create и предпросмотр
// 5. Работа фильтра в реальном времени
