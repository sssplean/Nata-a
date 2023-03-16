// Активация тегов через хэш-конторль //

if(window.location.hash == "#sale-start") {
  initSale();
} else if(window.location.hash == "#rent-start") {
  initRent();
}

// Типы сделки //

// Тег продажи
function initSale() {
  if (document.getElementById('sale').classList.contains('teg-search__activated')) {
    document.getElementById('sale').classList.remove('teg-search__activated');
    document.getElementById('page-content-title').innerHTML = 'Sve ponude';
  } else {
    document.getElementById('rent').classList.remove('teg-search__activated');
    document.getElementById('sale').classList.add('teg-search__activated');
    document.getElementById('page-content-title').innerHTML = 'Prodaja';
  }
}
// Тег аренды
function initRent() {
  if (document.getElementById('rent').classList.contains('teg-search__activated')) {
    document.getElementById('rent').classList.remove('teg-search__activated');
    document.getElementById('page-content-title').innerHTML = 'Sve ponude';
  } else {
    document.getElementById('sale').classList.remove('teg-search__activated');
    document.getElementById('rent').classList.add('teg-search__activated');
    document.getElementById('page-content-title').innerHTML = 'Izdavanje';
  }
}

// Типы объектов //

// Автоактивация тега "ВСЕ"
function objectsCheck() {
  let generalTeg = document.getElementById('all-objects');
  /*let allTypes = document.querySelectorAll('.type-teg');
  allTypes.forEach(type => {
    if (!type.classList.contains('teg-search__activated')) {
      return;
    } else {
      generalTeg.classList.add('teg-search__activated');
    }
  });
}*/
  if (document.getElementById('house').classList.contains('teg-search__activated') &&
  document.getElementById('apartment').classList.contains('teg-search__activated') &&
  document.getElementById('bussines-place').classList.contains('teg-search__activated') &&
  document.getElementById('garage').classList.contains('teg-search__activated') &&
  document.getElementById('room').classList.contains('teg-search__activated') &&
  document.getElementById('building').classList.contains('teg-search__activated') &&
  document.getElementById('hotel').classList.contains('teg-search__activated') &&
  document.getElementById('land-for-building').classList.contains('teg-search__activated') &&
  document.getElementById('land-plot').classList.contains('teg-search__activated')) {
    generalTeg.classList.add('teg-search__activated');
  } else {
    generalTeg.classList.remove('teg-search__activated');
  }
}
// Активация тега типа объекта
function initObjectTeg(teg) {
  let button = document.getElementById(teg);
  if (button.classList.contains('teg-search__activated')) {
    button.classList.remove('teg-search__activated');
    objectsCheck();
  } else {
    button.classList.add('teg-search__activated');
    objectsCheck();
  }
}
// Ручная активация тега "ВСЕ"
function initAllObjectsTegs() {
  if (document.getElementById('all-objects').classList.contains('teg-search__activated')) {
    let allTypes = document.querySelectorAll('.type-teg');
    allTypes.forEach((type, i) => {
      type.classList.remove('teg-search__activated');
      document.getElementById('all-objects').classList.remove('teg-search__activated');
    });
  } else {
    let allTypes = document.querySelectorAll('.type-teg');
    allTypes.forEach((type, i) => {
      type.classList.add('teg-search__activated');
      document.getElementById('all-objects').classList.add('teg-search__activated');
    });
  }
}

// Дополнительные опции //

// Активация дополнительных поисковых опций
function initPatternTeg(teg) {
  if (document.getElementById(teg).classList.contains('teg-search__activated')) {
    document.getElementById(teg).classList.remove('teg-search__activated');
  } else {
    document.getElementById(teg).classList.add('teg-search__activated');
  }
}
// Сброс всех дополнительных поисковых опций
function resetPatterns() {
  let allPatterns = document.querySelectorAll('.pattern-teg');
  allPatterns.forEach((ptrn, i) => {
    ptrn.classList.remove('teg-search__activated');
  });
}

// Выбор локаций //

// Все локации //

// Автоактивация тега "ВСЕ"
function allLocationsCheck() {
  if (
    document.getElementById('hn-interior-locations').classList.contains('teg-search__activated') &&
    document.getElementById('kotor-interior-locations').classList.contains('teg-search__activated') &&
    document.getElementById('tivat-interior-locations').classList.contains('teg-search__activated') &&
    document.getElementById('budva-interior-locations').classList.contains('teg-search__activated')) {
      document.getElementById('all-locations').classList.add('teg-search__activated');
      document.getElementById('all-locations').classList.remove('teg-search__disactivated');
    }
}
// Подсчёт выбрынных локаций
function allInitLocationsCount() {
  document.getElementById('all-locations-count').innerHTML =
  Number(document.getElementById('hn-count').innerHTML) +
  Number(document.getElementById('kotor-count').innerHTML) +
  Number(document.getElementById('tivat-count').innerHTML) +
  Number(document.getElementById('budva-count').innerHTML);
  if (document.getElementById('all-locations-count').innerHTML == 0) {
    document.getElementById('all-locations-count').innerHTML = '';
  }
}
// Ручная активация тега "ВСЕ"
function initAllLocationsTegs() {
  if (document.getElementById('all-locations').classList.contains('teg-search__activated')) {
    if (document.getElementById('hn-interior-locations').classList.contains('teg-search__disactivated')) {
      initAllHNLocationsTegs();
    }
    if (document.getElementById('kotor-interior-locations').classList.contains('teg-search__disactivated')) {
      initAllKotorLocationsTegs();
    }
    if (document.getElementById('tivat-interior-locations').classList.contains('teg-search__disactivated')) {
      initAllTivatLocationsTegs();
    }
    if (document.getElementById('budva-interior-locations').classList.contains('teg-search__disactivated')) {
      initAllBudvaLocationsTegs();
    }
    initAllHNLocationsTegs();
    initAllKotorLocationsTegs();
    initAllTivatLocationsTegs();
    initAllBudvaLocationsTegs();
    document.getElementById('all-locations').classList.remove('teg-search__activated');
    document.getElementById('all-locations').classList.add('teg-search__disactivated');
    } else {
    if (document.getElementById('hn-interior-locations').classList.contains('teg-search__activated')) {
      initAllHNLocationsTegs();
    }
    if (document.getElementById('kotor-interior-locations').classList.contains('teg-search__activated')) {
      initAllKotorLocationsTegs();
    }
    if (document.getElementById('tivat-interior-locations').classList.contains('teg-search__activated')) {
      initAllTivatLocationsTegs();
    }
    if (document.getElementById('budva-interior-locations').classList.contains('teg-search__activated')) {
      initAllBudvaLocationsTegs();
    }
    initAllHNLocationsTegs();
    initAllKotorLocationsTegs();
    initAllTivatLocationsTegs();
    initAllBudvaLocationsTegs();
    document.getElementById('all-locations').classList.remove('teg-search__disactivated');
    document.getElementById('all-locations').classList.add('teg-search__activated');
    document.getElementById('all-locations-count').innerHTML = '';
  }
}
// Раскрытие блоков внутренних локаций регионов
function initInteriorLocationsTeg(teg) {
  let iteriorTeg = teg + '-interior';
  if (document.getElementById(teg).style.order == '1') {
    document.getElementById(iteriorTeg).style.display = 'none';
    document.getElementById('all-locations').classList.remove('location__defocus');
    document.getElementById('herceg-novi').classList.remove('location__defocus');
    document.getElementById('kotor').classList.remove('location__defocus');
    document.getElementById('tivat').classList.remove('location__defocus');
    document.getElementById('budva').classList.remove('location__defocus');
    document.getElementById(teg).style.order = '0';
    document.getElementById(teg).style.width = '43%';
  } else {
    document.getElementById('all-locations').classList.add('location__defocus');
    document.getElementById('herceg-novi').style.order = '0';
    document.getElementById('herceg-novi').style.width = '43%';
    document.getElementById('herceg-novi').classList.add('location__defocus');
    document.getElementById('herceg-novi-interior').style.display = 'none';
    document.getElementById('kotor').style.order = '0';
    document.getElementById('kotor').style.width = '43%';
    document.getElementById('kotor').classList.add('location__defocus');
    document.getElementById('kotor-interior').style.display = 'none';
    document.getElementById('tivat').style.order = '0';
    document.getElementById('tivat').style.width = '43%';
    document.getElementById('tivat').classList.add('location__defocus');
    document.getElementById('tivat-interior').style.display = 'none';
    document.getElementById('budva').style.order = '0';
    document.getElementById('budva').style.width = '43%';
    document.getElementById('budva').classList.add('location__defocus');
    document.getElementById('budva-interior').style.display = 'none';
    document.getElementById(teg).classList.remove('location__defocus')
    document.getElementById(teg).style.order = '1';
    document.getElementById(teg).style.width = '100%';
    document.getElementById(iteriorTeg).style.display = 'flex';
  }
}

// Херцег Нови

// Автоактивация тега "ВСЕ"
function hnInteriorLocationsCheck() {
  if (
    document.getElementById('hn-centar').classList.contains('teg-search__activated') &&
    document.getElementById('hn-stari-grad').classList.contains('teg-search__activated') &&
    document.getElementById('savina').classList.contains('teg-search__activated') &&
    document.getElementById('srbina').classList.contains('teg-search__activated') &&
    document.getElementById('dubrava').classList.contains('teg-search__activated') &&
    document.getElementById('crveni-krst').classList.contains('teg-search__activated') &&
    document.getElementById('topla').classList.contains('teg-search__activated') &&
    document.getElementById('igalo').classList.contains('teg-search__activated') &&
    document.getElementById('gomila').classList.contains('teg-search__activated') &&
    document.getElementById('igalo-petlja').classList.contains('teg-search__activated') &&
    document.getElementById('ratisevina').classList.contains('teg-search__activated') &&
    document.getElementById('sutorina').classList.contains('teg-search__activated') &&
    document.getElementById('suscepan').classList.contains('teg-search__activated') &&
    document.getElementById('trebesin').classList.contains('teg-search__activated') &&
    document.getElementById('mojdez').classList.contains('teg-search__activated') &&
    document.getElementById('cela').classList.contains('teg-search__activated') &&
    document.getElementById('zvinje').classList.contains('teg-search__activated') &&
    document.getElementById('njivice').classList.contains('teg-search__activated') &&
    document.getElementById('podi').classList.contains('teg-search__activated') &&
    document.getElementById('kameno').classList.contains('teg-search__activated') &&
    document.getElementById('vrbanj').classList.contains('teg-search__activated') &&
    document.getElementById('meljine').classList.contains('teg-search__activated') &&
    document.getElementById('zelenika').classList.contains('teg-search__activated') &&
    document.getElementById('sasovici').classList.contains('teg-search__activated') &&
    document.getElementById('kuti').classList.contains('teg-search__activated') &&
    document.getElementById('kumbor').classList.contains('teg-search__activated') &&
    document.getElementById('denovici').classList.contains('teg-search__activated') &&
    document.getElementById('baosici').classList.contains('teg-search__activated') &&
    document.getElementById('bijela').classList.contains('teg-search__activated') &&
    document.getElementById('kamenari').classList.contains('teg-search__activated')) {
      document.getElementById('hn-interior-locations').classList.add('teg-search__activated')
  }
}
// Активация тегов локаций
function initHNLocationTeg(teg) {
  if (document.getElementById('hn-interior-locations').classList.contains('teg-search__activated')) {
    document.getElementById('hn-interior-locations').classList.remove('teg-search__activated');
    document.getElementById('hn-centar').classList.remove('teg-search__activated');
    document.getElementById('hn-stari-grad').classList.remove('teg-search__activated');
    document.getElementById('savina').classList.remove('teg-search__activated');
    document.getElementById('srbina').classList.remove('teg-search__activated');
    document.getElementById('dubrava').classList.remove('teg-search__activated');
    document.getElementById('crveni-krst').classList.remove('teg-search__activated');
    document.getElementById('topla').classList.remove('teg-search__activated');
    document.getElementById('igalo').classList.remove('teg-search__activated');
    document.getElementById('gomila').classList.remove('teg-search__activated');
    document.getElementById('igalo-petlja').classList.remove('teg-search__activated');
    document.getElementById('ratisevina').classList.remove('teg-search__activated');
    document.getElementById('sutorina').classList.remove('teg-search__activated');
    document.getElementById('suscepan').classList.remove('teg-search__activated');
    document.getElementById('trebesin').classList.remove('teg-search__activated');
    document.getElementById('mojdez').classList.remove('teg-search__activated');
    document.getElementById('cela').classList.remove('teg-search__activated');
    document.getElementById('zvinje').classList.remove('teg-search__activated');
    document.getElementById('njivice').classList.remove('teg-search__activated');
    document.getElementById('podi').classList.remove('teg-search__activated');
    document.getElementById('kameno').classList.remove('teg-search__activated');
    document.getElementById('vrbanj').classList.remove('teg-search__activated');
    document.getElementById('meljine').classList.remove('teg-search__activated');
    document.getElementById('zelenika').classList.remove('teg-search__activated');
    document.getElementById('sasovici').classList.remove('teg-search__activated');
    document.getElementById('kuti').classList.remove('teg-search__activated');
    document.getElementById('kumbor').classList.remove('teg-search__activated');
    document.getElementById('denovici').classList.remove('teg-search__activated');
    document.getElementById('baosici').classList.remove('teg-search__activated');
    document.getElementById('bijela').classList.remove('teg-search__activated');
    document.getElementById('kamenari').classList.remove('teg-search__activated');
  }
  if (document.getElementById(teg).classList.contains('teg-search__activated')) {
    document.getElementById(teg).classList.remove('teg-search__activated');
    document.getElementById('hn-count').innerHTML--;
    if (document.getElementById('hn-count').innerHTML == 0) {
      document.getElementById('hn-count').innerHTML = '';
    }
    allInitLocationsCount();
  } else {
    document.getElementById(teg).classList.add('teg-search__activated');
    document.getElementById('hn-count').innerHTML++;
    allInitLocationsCount();
  }
  hnInteriorLocationsCheck();
  allLocationsCheck();
}
// Ручная активация тега "ВСЕ"
function initAllHNLocationsTegs() {
  if (document.getElementById('hn-interior-locations').classList.contains('teg-search__activated')) {
    document.getElementById('hn-interior-locations').classList.remove('teg-search__activated');
    document.getElementById('hn-interior-locations').classList.add('teg-search__disactivated');
    document.getElementById('hn-centar').classList.remove('teg-search__activated');
    document.getElementById('hn-stari-grad').classList.remove('teg-search__activated');
    document.getElementById('savina').classList.remove('teg-search__activated');
    document.getElementById('srbina').classList.remove('teg-search__activated');
    document.getElementById('dubrava').classList.remove('teg-search__activated');
    document.getElementById('crveni-krst').classList.remove('teg-search__activated');
    document.getElementById('topla').classList.remove('teg-search__activated');
    document.getElementById('igalo').classList.remove('teg-search__activated');
    document.getElementById('gomila').classList.remove('teg-search__activated');
    document.getElementById('igalo-petlja').classList.remove('teg-search__activated');
    document.getElementById('ratisevina').classList.remove('teg-search__activated');
    document.getElementById('sutorina').classList.remove('teg-search__activated');
    document.getElementById('suscepan').classList.remove('teg-search__activated');
    document.getElementById('trebesin').classList.remove('teg-search__activated');
    document.getElementById('mojdez').classList.remove('teg-search__activated');
    document.getElementById('cela').classList.remove('teg-search__activated');
    document.getElementById('zvinje').classList.remove('teg-search__activated');
    document.getElementById('njivice').classList.remove('teg-search__activated');
    document.getElementById('podi').classList.remove('teg-search__activated');
    document.getElementById('kameno').classList.remove('teg-search__activated');
    document.getElementById('vrbanj').classList.remove('teg-search__activated');
    document.getElementById('meljine').classList.remove('teg-search__activated');
    document.getElementById('zelenika').classList.remove('teg-search__activated');
    document.getElementById('sasovici').classList.remove('teg-search__activated');
    document.getElementById('kuti').classList.remove('teg-search__activated');
    document.getElementById('kumbor').classList.remove('teg-search__activated');
    document.getElementById('denovici').classList.remove('teg-search__activated');
    document.getElementById('baosici').classList.remove('teg-search__activated');
    document.getElementById('bijela').classList.remove('teg-search__activated');
    document.getElementById('kamenari').classList.remove('teg-search__activated');
    document.getElementById('hn-count').innerHTML = '';
    if (document.getElementById('all-locations').classList.contains('teg-search__activated')) {
      document.getElementById('all-locations').classList.remove('teg-search__activated');
      document.getElementById('all-locations').classList.add('teg-search__disactivated');
    }
    allInitLocationsCount();
    allLocationsCheck();
  } else {
    document.getElementById('hn-centar').classList.add('teg-search__activated');
    document.getElementById('hn-stari-grad').classList.add('teg-search__activated');
    document.getElementById('savina').classList.add('teg-search__activated');
    document.getElementById('srbina').classList.add('teg-search__activated');
    document.getElementById('dubrava').classList.add('teg-search__activated');
    document.getElementById('crveni-krst').classList.add('teg-search__activated');
    document.getElementById('topla').classList.add('teg-search__activated');
    document.getElementById('igalo').classList.add('teg-search__activated');
    document.getElementById('gomila').classList.add('teg-search__activated');
    document.getElementById('igalo-petlja').classList.add('teg-search__activated');
    document.getElementById('ratisevina').classList.add('teg-search__activated');
    document.getElementById('sutorina').classList.add('teg-search__activated');
    document.getElementById('suscepan').classList.add('teg-search__activated');
    document.getElementById('trebesin').classList.add('teg-search__activated');
    document.getElementById('mojdez').classList.add('teg-search__activated');
    document.getElementById('cela').classList.add('teg-search__activated');
    document.getElementById('zvinje').classList.add('teg-search__activated');
    document.getElementById('njivice').classList.add('teg-search__activated');
    document.getElementById('podi').classList.add('teg-search__activated');
    document.getElementById('kameno').classList.add('teg-search__activated');
    document.getElementById('vrbanj').classList.add('teg-search__activated');
    document.getElementById('meljine').classList.add('teg-search__activated');
    document.getElementById('zelenika').classList.add('teg-search__activated');
    document.getElementById('sasovici').classList.add('teg-search__activated');
    document.getElementById('kuti').classList.add('teg-search__activated');
    document.getElementById('kumbor').classList.add('teg-search__activated');
    document.getElementById('denovici').classList.add('teg-search__activated');
    document.getElementById('baosici').classList.add('teg-search__activated');
    document.getElementById('bijela').classList.add('teg-search__activated');
    document.getElementById('kamenari').classList.add('teg-search__activated');
    document.getElementById('hn-interior-locations').classList.remove('teg-search__disactivated');
    document.getElementById('hn-interior-locations').classList.add('teg-search__activated');
    document.getElementById('hn-count').innerHTML = '30';
    allInitLocationsCount();
    allLocationsCheck();
  }
}

// Котор

// Автоактивация тега "ВСЕ"
function kotorInteriorLocationsCheck() {
  if (document.getElementById('kotor-stari-grad').classList.contains('teg-search__activated') &&
    document.getElementById('dobrota').classList.contains('teg-search__activated')) {
      document.getElementById('kotor-interior-locations').classList.add('teg-search__activated')
  }
}
// Активация тегов локаций
function initKotorLocationTeg(teg) {
  if (document.getElementById('kotor-interior-locations').classList.contains('teg-search__activated')) {
    document.getElementById('kotor-interior-locations').classList.remove('teg-search__activated');
    document.getElementById('kotor-stari-grad').classList.remove('teg-search__activated');
    document.getElementById('dobrota').classList.remove('teg-search__activated');
  }
  if (document.getElementById(teg).classList.contains('teg-search__activated')) {
    document.getElementById(teg).classList.remove('teg-search__activated');
    document.getElementById('kotor-count').innerHTML--;
    if (document.getElementById('kotor-count').innerHTML == 0) {
      document.getElementById('kotor-count').innerHTML = '';
    }
    allInitLocationsCount();
  } else {
    document.getElementById(teg).classList.add('teg-search__activated');
    document.getElementById('kotor-count').innerHTML++;
    allInitLocationsCount();
  }
  kotorInteriorLocationsCheck();
  allLocationsCheck();
}
// Ручная активация тега "ВСЕ"
function initAllKotorLocationsTegs() {
  if (document.getElementById('kotor-interior-locations').classList.contains('teg-search__activated')) {
    document.getElementById('kotor-interior-locations').classList.remove('teg-search__activated');
    document.getElementById('kotor-interior-locations').classList.add('teg-search__disactivated');
    document.getElementById('kotor-stari-grad').classList.remove('teg-search__activated');
    document.getElementById('dobrota').classList.remove('teg-search__activated');
    document.getElementById('kotor-count').innerHTML = '';
    if (document.getElementById('all-locations').classList.contains('teg-search__activated')) {
      document.getElementById('all-locations').classList.remove('teg-search__activated');
      document.getElementById('all-locations').classList.add('teg-search__disactivated');
    }
    allInitLocationsCount();
    allLocationsCheck();
  } else {
    document.getElementById('kotor-stari-grad').classList.add('teg-search__activated');
    document.getElementById('dobrota').classList.add('teg-search__activated');
    document.getElementById('kotor-interior-locations').classList.remove('teg-search__disactivated');
    document.getElementById('kotor-interior-locations').classList.add('teg-search__activated');
    document.getElementById('kotor-count').innerHTML = '2';
    allInitLocationsCount();
    allLocationsCheck();
  }
}

// Тиват

// Автоактивация тега "ВСЕ"
function tivaiInteriorLocationsCheck() {
  if (
    document.getElementById('tivat-centar').classList.contains('teg-search__activated') &&
    document.getElementById('lastva').classList.contains('teg-search__activated')) {
      document.getElementById('tivat-interior-locations').classList.add('teg-search__activated')
  }
}
// Активация тегов локаций
function initTivatLocationTeg(teg) {
  if (document.getElementById('tivat-interior-locations').classList.contains('teg-search__activated')) {
    document.getElementById('tivat-interior-locations').classList.remove('teg-search__activated');
    document.getElementById('tivat-centar').classList.remove('teg-search__activated');
    document.getElementById('lastva').classList.remove('teg-search__activated');
  }
  if (document.getElementById(teg).classList.contains('teg-search__activated')) {
    document.getElementById(teg).classList.remove('teg-search__activated');
    document.getElementById('tivat-count').innerHTML--;
    if (document.getElementById('tivat-count').innerHTML == 0) {
      document.getElementById('tivat-count').innerHTML = '';
    }
    allInitLocationsCount();
  } else {
    document.getElementById(teg).classList.add('teg-search__activated');
    document.getElementById('tivat-count').innerHTML++;
    allInitLocationsCount();
  }
  tivaiInteriorLocationsCheck();
  allLocationsCheck();
}
// Ручная активация тега "ВСЕ"
function initAllTivatLocationsTegs() {
  if (document.getElementById('tivat-interior-locations').classList.contains('teg-search__activated')) {
    document.getElementById('tivat-interior-locations').classList.remove('teg-search__activated');
    document.getElementById('tivat-interior-locations').classList.add('teg-search__disactivated');
    document.getElementById('tivat-centar').classList.remove('teg-search__activated');
    document.getElementById('lastva').classList.remove('teg-search__activated');
    document.getElementById('tivat-count').innerHTML = '';
    if (document.getElementById('all-locations').classList.contains('teg-search__activated')) {
      document.getElementById('all-locations').classList.remove('teg-search__activated');
      document.getElementById('all-locations').classList.add('teg-search__disactivated');
    }
    allInitLocationsCount();
    allLocationsCheck();
  } else {
    document.getElementById('tivat-centar').classList.add('teg-search__activated');
    document.getElementById('lastva').classList.add('teg-search__activated');
    document.getElementById('tivat-interior-locations').classList.remove('teg-search__disactivated');
    document.getElementById('tivat-interior-locations').classList.add('teg-search__activated');
    document.getElementById('tivat-count').innerHTML = '2';
    allInitLocationsCount();
    allLocationsCheck();
  }
}

// Будва

// Автоактивация тега "ВСЕ"
function budvaInteriorLocationsCheck() {
  if (document.getElementById('budva-centar').classList.contains('teg-search__activated') &&
    document.getElementById('becici').classList.contains('teg-search__activated')) {
      document.getElementById('budva-interior-locations').classList.add('teg-search__activated')
  }
}
// Активация тегов локаций
function initBudvaLocationTeg(teg) {
  if (document.getElementById('budva-interior-locations').classList.contains('teg-search__activated')) {
    document.getElementById('budva-interior-locations').classList.remove('teg-search__activated');
    document.getElementById('budva-centar').classList.remove('teg-search__activated');
    document.getElementById('becici').classList.remove('teg-search__activated');
  }
  if (document.getElementById(teg).classList.contains('teg-search__activated')) {
    document.getElementById(teg).classList.remove('teg-search__activated');
    document.getElementById('budva-count').innerHTML--;
    if (document.getElementById('budva-count').innerHTML == 0) {
      document.getElementById('budva-count').innerHTML = '';
    }
    allInitLocationsCount();
  } else {
    document.getElementById(teg).classList.add('teg-search__activated');
    document.getElementById('budva-count').innerHTML++;
    allInitLocationsCount();
  }
  budvaInteriorLocationsCheck();
  allLocationsCheck();
}
// Ручная активация тега "ВСЕ"
function initAllBudvaLocationsTegs() {
  if (document.getElementById('budva-interior-locations').classList.contains('teg-search__activated')) {
    document.getElementById('budva-interior-locations').classList.remove('teg-search__activated');
    document.getElementById('budva-interior-locations').classList.add('teg-search__disactivated');
    document.getElementById('budva-centar').classList.remove('teg-search__activated');
    document.getElementById('becici').classList.remove('teg-search__activated');
    document.getElementById('budva-count').innerHTML = '';
    if (document.getElementById('all-locations').classList.contains('teg-search__activated')) {
      document.getElementById('all-locations').classList.remove('teg-search__activated');
      document.getElementById('all-locations').classList.add('teg-search__disactivated');
    }
    allInitLocationsCount();
    allLocationsCheck();
  } else {
    document.getElementById('budva-centar').classList.add('teg-search__activated');
    document.getElementById('becici').classList.add('teg-search__activated');
    document.getElementById('budva-interior-locations').classList.remove('teg-search__disactivated');
    document.getElementById('budva-interior-locations').classList.add('teg-search__activated');
    document.getElementById('budva-count').innerHTML = '2';
    allInitLocationsCount();
    allLocationsCheck();
  }
}

// Теги из постов //

function initPostTeg(teg) {
  document.getElementById(teg).click();
}

// Фунциклирование слайдера //

window.onload = function(){
  priceSlideOne();
  priceSlideTwo();
  squareSlideOne();
  squareSlideTwo();
}

let priceDisplayValOne = document.getElementById('price-range1');
let priceDisplayValTwo = document.getElementById('price-range2');
let priceSliderOne = document.getElementById('price-slider1');
let priceSliderTwo = document.getElementById('price-slider2');
let priceSliderMaxValue = document.getElementById('price-slider1').max;
let priceSliderTrack = document.getElementById('price-slider-track');
let priceMinGap = 0;

function priceRangeOne() {
  if(priceDisplayValOne.value == "") {
    priceDisplayValOne.value = 0;
  }
  priceSliderOne.value = priceDisplayValOne.value ;
  priceSlideOne();
}

function priceRangeTwo() {
  if(priceDisplayValTwo.value == "") {
    priceDisplayValTwo.value = priceSliderMaxValue;
  }
  priceSliderTwo.value = priceDisplayValTwo.value;
  priceSlideTwo();
}

function priceSlideOne() {
  if(parseInt(priceSliderTwo.value) - parseInt(priceSliderOne.value) <= priceMinGap) {
    priceSliderOne.value = parseInt(priceSliderTwo.value) - priceMinGap;
  }
  priceDisplayValOne.value = priceSliderOne.value;
  priceFillColor();
}

function priceSlideTwo() {
  if(parseInt(priceSliderTwo.value) - parseInt(priceSliderOne.value) <= priceMinGap) {
    priceSliderTwo.value = parseInt(priceSliderOne.value) + priceMinGap;
  }
  priceDisplayValTwo.value = priceSliderTwo.value;
  priceFillColor();
}

function priceFillColor() {
  percent1 = (priceSliderOne.value / priceSliderMaxValue) * 100;
  percent2 = (priceSliderTwo.value / priceSliderMaxValue) * 100;
  priceSliderTrack.style.background = `linear-gradient(to right, #eaeded ${percent1}% , #dacfad ${percent1}% , #b59f5b ${percent2}%, #eaeded ${percent2}%)`;
}

let squareDisplayValOne = document.getElementById('square-range1');
let squareDisplayValTwo = document.getElementById('square-range2');
let squareSliderOne = document.getElementById('square-slider1');
let squareSliderTwo = document.getElementById('square-slider2');
let squareSliderMaxValue = document.getElementById('square-slider1').max;
let squareSliderTrack = document.getElementById('square-slider-track');
let squareMinGap = 0;

function squareRangeOne() {
  if(squareDisplayValOne.value == "") {
    squareDisplayValOne.value = 0;
  }
  squareSliderOne.value = squareDisplayValOne.value ;
  squareSlideOne();
}

function squareRangeTwo() {
  if(squareDisplayValTwo.value == "") {
    squareDisplayValTwo.value = squareSliderMaxValue;
  }
  squareSliderTwo.value = squareDisplayValTwo.value;
  squareSlideTwo();
}

function squareSlideOne() {
  if(parseInt(squareSliderTwo.value) - parseInt(squareSliderOne.value) <= squareMinGap) {
    squareSliderOne.value = parseInt(squareSliderTwo.value) - squareMinGap;
  }
  squareDisplayValOne.value = squareSliderOne.value;
  squareFillColor();
}

function squareSlideTwo() {
  if(parseInt(squareSliderTwo.value) - parseInt(squareSliderOne.value) <= squareMinGap) {
    squareSliderTwo.value = parseInt(squareSliderOne.value) + squareMinGap;
  }
  squareDisplayValTwo.value = squareSliderTwo.value;
  squareFillColor();
}

function squareFillColor() {
  percent1 = (squareSliderOne.value / squareSliderMaxValue) * 100;
  percent2 = (squareSliderTwo.value / squareSliderMaxValue) * 100;
  squareSliderTrack.style.background = `linear-gradient(to right, #eaeded ${percent1}% , #dacfad ${percent1}% , #b59f5b ${percent2}%, #eaeded ${percent2}%)`;
}
