// Типы сделки //

// Тег продажи
function initSale() {
  if (document.getElementById('sale').classList.contains('teg-search__activated')) {
    document.getElementById('sale').classList.remove('teg-search__activated');
  } else {
    document.getElementById('rent').classList.remove('teg-search__activated');
    document.getElementById('sale').classList.add('teg-search__activated');
  }
}
// Тег аренды
function initRent() {
  if (document.getElementById('rent').classList.contains('teg-search__activated')) {
    document.getElementById('rent').classList.remove('teg-search__activated');
  } else {
    document.getElementById('sale').classList.remove('teg-search__activated');
    document.getElementById('rent').classList.add('teg-search__activated');
  }
}

// Типы объектов //

// Автоактивация тега "ВСЕ"
function objectsCheck() {
  if (
    document.getElementById('house').classList.contains('teg-search__activated') &&
    document.getElementById('apartment').classList.contains('teg-search__activated') &&
    document.getElementById('bussines-place').classList.contains('teg-search__activated') &&
    document.getElementById('garage').classList.contains('teg-search__activated') &&
    document.getElementById('room').classList.contains('teg-search__activated') &&
    document.getElementById('hotel').classList.contains('teg-search__activated') &&
    document.getElementById('land-for-building').classList.contains('teg-search__activated') &&
    document.getElementById('land-plot').classList.contains('teg-search__activated')) {
      document.getElementById('all-objects').classList.add('teg-search__activated')
  }
}
// Активация тега типа объекта
function initObjectTeg(teg) {
  if (document.getElementById('all-objects').classList.contains('teg-search__activated')) {
    document.getElementById('all-objects').classList.remove('teg-search__activated');
    document.getElementById('house').classList.remove('teg-search__activated');
    document.getElementById('apartment').classList.remove('teg-search__activated');
    document.getElementById('bussines-place').classList.remove('teg-search__activated');
    document.getElementById('garage').classList.remove('teg-search__activated');
    document.getElementById('room').classList.remove('teg-search__activated');
    document.getElementById('hotel').classList.remove('teg-search__activated');
    document.getElementById('land-for-building').classList.remove('teg-search__activated');
    document.getElementById('land-plot').classList.remove('teg-search__activated');
  }
  if (document.getElementById(teg).classList.contains('teg-search__activated')) {
    document.getElementById(teg).classList.remove('teg-search__activated');
  } else {
    document.getElementById(teg).classList.add('teg-search__activated');
  }
  objectsCheck();
}
// Ручная активация тега "ВСЕ"
function initAllObjectsTegs() {
  if (document.getElementById('all-objects').classList.contains('teg-search__activated')) {
    document.getElementById('all-objects').classList.remove('teg-search__activated');
    document.getElementById('house').classList.remove('teg-search__activated');
    document.getElementById('apartment').classList.remove('teg-search__activated');
    document.getElementById('bussines-place').classList.remove('teg-search__activated');
    document.getElementById('garage').classList.remove('teg-search__activated');
    document.getElementById('room').classList.remove('teg-search__activated');
    document.getElementById('hotel').classList.remove('teg-search__activated');
    document.getElementById('land-for-building').classList.remove('teg-search__activated');
    document.getElementById('land-plot').classList.remove('teg-search__activated');
  } else {
    document.getElementById('house').classList.add('teg-search__activated');
    document.getElementById('apartment').classList.add('teg-search__activated');
    document.getElementById('bussines-place').classList.add('teg-search__activated');
    document.getElementById('garage').classList.add('teg-search__activated');
    document.getElementById('room').classList.add('teg-search__activated');
    document.getElementById('hotel').classList.add('teg-search__activated');
    document.getElementById('land-for-building').classList.add('teg-search__activated');
    document.getElementById('land-plot').classList.add('teg-search__activated');
    document.getElementById('all-objects').classList.add('teg-search__activated');
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
    document.getElementById('one-room').classList.remove('teg-search__activated');
    document.getElementById('two-rooms').classList.remove('teg-search__activated');
    document.getElementById('three-rooms').classList.remove('teg-search__activated');
    document.getElementById('four-rooms').classList.remove('teg-search__activated');
    document.getElementById('one-bathroom').classList.remove('teg-search__activated');
    document.getElementById('two-bathrooms').classList.remove('teg-search__activated');
    document.getElementById('three-bathrooms').classList.remove('teg-search__activated');
    document.getElementById('terrace').classList.remove('teg-search__activated');
    document.getElementById('garden').classList.remove('teg-search__activated');
    document.getElementById('land').classList.remove('teg-search__activated');
    document.getElementById('renovated').classList.remove('teg-search__activated');
    document.getElementById('sea-view').classList.remove('teg-search__activated');
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

// Форма обратной связи //

function openPopup(id) {
  document.getElementById(id).style.visibility = 'visible';
  document.getElementById(id).style.opacity = '1';
  document.getElementById('callback-button').style.visibility = 'hidden';
  document.getElementById('callback-button').style.opacity = '0';
}

function closePopup(id) {
  document.getElementById(id).style.visibility = 'hidden';
  document.getElementById(id).style.opacity = '0';
  document.getElementById('callback-button').style.visibility = 'visible';
  document.getElementById('callback-button').style.opacity = '1';}

// Активация тегов через хэш-конторль //

if(window.location.hash == "#sale-start") {
  initSale();
} else if(window.location.hash == "#rent-start") {
  initRent();
}

// Фунциклирование слайдера //

let lowSlider = document.getElementById('price-min-range');
lowSlider.style.background = `linear-gradient(to right, #c1caca 0%, #c1caca ${(lowSlider.value-lowSlider.min)/(lowSlider.max-lowSlider.min) * 100}%, #b59f5b ${(lowSlider.value-lowSlider.min)/(lowSlider.max-lowSlider.min) * 100}%, #b59f5b 100%)`;
document.getElementById('price-min').value = lowSlider.value;
let lowWidth = '50%';

let highSlider = document.getElementById('price-max-range');
highSlider.style.background = `linear-gradient(to right, #b59f5b 0%, #b59f5b ${(highSlider.value-highSlider.min)/(highSlider.max-highSlider.min)*100}%, #c1caca ${(highSlider.value-highSlider.min)/(highSlider.max-highSlider.min)*100}%, #c1caca 100%)`;
document.getElementById('price-max').value = highSlider.value;
let highWidth = '50%';

lowSlider.oninput = function() {
  lowSlider.min = 0;
  if (document.getElementById('price-max').value == highSlider.max) {
    highSlider.max++;
  }
  this.style.background = `linear-gradient(to right, #c1caca 0%, #c1caca ${(this.value-this.min)/(this.max-this.min)*100}%, #b59f5b ${(this.value-this.min)/(this.max-this.min)*100}%, #b59f5b 100%)`;
  document.getElementById('price-min').value = this.value;
  lowSlider.max = document.getElementById('price-max').value;
  highSlider.min = document.getElementById('price-max').value;
  lowSlider.style.width = `calc(${document.getElementById('price-max').value / highSlider.max * 100}% - 1%)`;
  highSlider.style.width = `calc(${100 - (document.getElementById('price-max').value / highSlider.max * 100)}% + 1%)`;
  highSlider.style.background = '#c1caca';
};

highSlider.oninput = function() {
  highSlider.max--;
  if (document.getElementById('price-min').value == 0) {
    lowSlider.min = -1;
  }
  this.style.background = `linear-gradient(to right, #b59f5b 0%, #b59f5b ${(this.value-this.min)/(this.max-this.min)*100}%, #c1caca ${(this.value-this.min)/(this.max-this.min)*100}%, #c1caca 100%)`;
  document.getElementById('price-max').value = this.value;
  highSlider.min = document.getElementById('price-min').value;
  lowSlider.max = document.getElementById('price-min').value;
  highSlider.style.width = `calc(${100 - (document.getElementById('price-min').value / highSlider.max * 100)}% - 1%)`;
  lowSlider.style.width = `calc(${document.getElementById('price-min').value / highSlider.max * 100}% + 1%)`;
  lowSlider.style.background = '#c1caca';
};

function changeMinField() {
  lowSlider.value = document.getElementById('price-min').value;
  lowSlider.max = document.getElementById('price-max').value;
  highSlider.min = document.getElementById('price-max').value;
  lowSlider.style.width = `${document.getElementById('price-max').value / highSlider.max * 100}%`;
  highSlider.style.width = `${100 - (document.getElementById('price-max').value / highSlider.max * 100)}%`;
  lowSlider.style.background = `linear-gradient(to right, #c1caca 0%, #c1caca ${(this.value-this.min)/(this.max-this.min)*100}%, #b59f5b ${(this.value-this.min)/(this.max-this.min)*100}%, #b59f5b 100%)`;
  highSlider.style.background = '#c1caca';
}

function changeMaxField() {
  highSlider.value = document.getElementById('price-max').value;
  highSlider.min = document.getElementById('price-min').value;
  lowSlider.max = document.getElementById('price-min').value;
  highSlider.style.width = `${100 - (document.getElementById('price-min').value / highSlider.max * 100)}%`;
  lowSlider.style.width = `${document.getElementById('price-min').value / highSlider.max * 100}%`;
  highSlider.style.background = `linear-gradient(to right, #b59f5b 0%, #b59f5b ${(this.value-this.min)/(this.max-this.min)*100}%, #c1caca ${(this.value-this.min)/(this.max-this.min)*100}%, #c1caca 100%)`;
  lowSlider.style.background = '#c1caca';
}

// 1. Анимация ползунов
// 2. Работа фильтра
// 3. Работа фильтра в реальном времени
// 4. Анимация трендов
// 5. Слайдинг
// 6. Форма создания КО
// 7. Полиязычность
// 8. Переместить поиск и подписку в мобайл после агентов
// 9.
//10.
//11.
