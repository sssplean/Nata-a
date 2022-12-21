function initSale() {
  if (document.getElementById('sale').classList.contains('teg-search__activated')) {
    document.getElementById('sale').classList.remove('teg-search__activated');
  } else {
    document.getElementById('rent').classList.remove('teg-search__activated');
    document.getElementById('sale').classList.add('teg-search__activated');
  }
}

function initRent() {
  if (document.getElementById('rent').classList.contains('teg-search__activated')) {
    document.getElementById('rent').classList.remove('teg-search__activated');
  } else {
    document.getElementById('sale').classList.remove('teg-search__activated');
    document.getElementById('rent').classList.add('teg-search__activated');
  }
}

function objectsCheck() {
  if (((((((
    document.getElementById('house').classList.contains('teg-search__activated') &&
    document.getElementById('apartment').classList.contains('teg-search__activated')) &&
    document.getElementById('bussines-place').classList.contains('teg-search__activated')) &&
    document.getElementById('garage').classList.contains('teg-search__activated')) &&
    document.getElementById('room').classList.contains('teg-search__activated')) &&
    document.getElementById('hotel').classList.contains('teg-search__activated')) &&
    document.getElementById('land-for-building').classList.contains('teg-search__activated')) &&
    document.getElementById('land-plot').classList.contains('teg-search__activated')) {
      document.getElementById('all-objects').classList.add('teg-search__activated')
    }
}

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

function initPatternTeg(teg) {
  if (document.getElementById(teg).classList.contains('teg-search__activated')) {
    document.getElementById(teg).classList.remove('teg-search__activated');
  } else {
    document.getElementById(teg).classList.add('teg-search__activated');
  }
}

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

// Все локации

function initInteriorLocationsTeg(teg) {
  let iteriorTeg = teg + '-interior';
  if (document.getElementById(teg).classList.contains('Interior-Locations__activated')) {
    document.getElementById(teg).classList.remove('Interior-Locations__activated');
    document.getElementById(iteriorTeg).style.display = 'none';
    document.getElementById('all-locations').style.display = 'block';
    document.getElementById('herceg-novi').style.display = 'block';
    document.getElementById('kotor').style.display = 'inline';
    document.getElementById('tivat').style.display = 'block';
    document.getElementById('budva').style.display = 'block';
  } else {
    document.getElementById(teg).classList.add('Interior-Locations__activated')
    document.getElementById('all-locations').style.display = 'none';
    document.getElementById('herceg-novi').style.display = 'none';
    document.getElementById('kotor').style.display = 'none';
    document.getElementById('tivat').style.display = 'none';
    document.getElementById('budva').style.display = 'none';
    document.getElementById(teg).style.display = 'block';
    document.getElementById(iteriorTeg).style.display = 'flex';
  }
}

function allLocationsCheck() {
  if (((
    document.getElementById('hn-interior-locations').classList.contains('teg-search__activated') &&
    document.getElementById('kotor-interior-locations').classList.contains('teg-search__activated')) &&
    document.getElementById('tivat-interior-locations').classList.contains('teg-search__activated')) &&
    document.getElementById('budva-interior-locations').classList.contains('teg-search__activated')) {
      document.getElementById('all-locations').classList.add('teg-search__activated');
      document.getElementById('all-locations').classList.remove('teg-search__disactivated');
    }
}

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

// Херцег Нови

function HNinteriorLocationsCheck() {
  if (((((((((((((((((((((((((((((
    document.getElementById('hn-centar').classList.contains('teg-search__activated') &&
    document.getElementById('hn-stari-grad').classList.contains('teg-search__activated')) &&
    document.getElementById('savina').classList.contains('teg-search__activated')) &&
    document.getElementById('srbina').classList.contains('teg-search__activated')) &&
    document.getElementById('dubrava').classList.contains('teg-search__activated')) &&
    document.getElementById('crveni-krst').classList.contains('teg-search__activated')) &&
    document.getElementById('topla').classList.contains('teg-search__activated')) &&
    document.getElementById('igalo').classList.contains('teg-search__activated')) &&
    document.getElementById('gomila').classList.contains('teg-search__activated')) &&
    document.getElementById('igalo-petlja').classList.contains('teg-search__activated')) &&
    document.getElementById('ratisevina').classList.contains('teg-search__activated')) &&
    document.getElementById('sutorina').classList.contains('teg-search__activated')) &&
    document.getElementById('suscepan').classList.contains('teg-search__activated')) &&
    document.getElementById('trebesin').classList.contains('teg-search__activated')) &&
    document.getElementById('mojdez').classList.contains('teg-search__activated')) &&
    document.getElementById('cela').classList.contains('teg-search__activated')) &&
    document.getElementById('zvinje').classList.contains('teg-search__activated')) &&
    document.getElementById('njivice').classList.contains('teg-search__activated')) &&
    document.getElementById('podi').classList.contains('teg-search__activated')) &&
    document.getElementById('kameno').classList.contains('teg-search__activated')) &&
    document.getElementById('vrbanj').classList.contains('teg-search__activated')) &&
    document.getElementById('meljine').classList.contains('teg-search__activated')) &&
    document.getElementById('zelenika').classList.contains('teg-search__activated')) &&
    document.getElementById('sasovici').classList.contains('teg-search__activated')) &&
    document.getElementById('kuti').classList.contains('teg-search__activated')) &&
    document.getElementById('kumbor').classList.contains('teg-search__activated')) &&
    document.getElementById('denovici').classList.contains('teg-search__activated')) &&
    document.getElementById('baosici').classList.contains('teg-search__activated')) &&
    document.getElementById('bijela').classList.contains('teg-search__activated')) &&
    document.getElementById('kamenari').classList.contains('teg-search__activated')) {
      document.getElementById('hn-interior-locations').classList.add('teg-search__activated')
  }
}

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
  HNinteriorLocationsCheck();
  allLocationsCheck();
}

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

function KotorinteriorLocationsCheck() {
  if (document.getElementById('kotor-stari-grad').classList.contains('teg-search__activated') &&
    document.getElementById('dobrota').classList.contains('teg-search__activated')) {
      document.getElementById('kotor-interior-locations').classList.add('teg-search__activated')
  }
}

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
  KotorinteriorLocationsCheck();
  allLocationsCheck();
}

function initAllKotorLocationsTegs() {
  if (document.getElementById('kotor-interior-locations').classList.contains('teg-search__activated')) {
    document.getElementById('kotor-interior-locations').classList.remove('teg-search__activated');
    document.getElementById('kotor-interior-locations').classList.add('teg-search__disactivated');
    document.getElementById('kotor-stari-grad').classList.remove('teg-search__activated');
    document.getElementById('dobrota').classList.remove('teg-search__activated');
    document.getElementById('kotor-count').innerHTML = '';
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

function TivatinteriorLocationsCheck() {
  if (
    document.getElementById('tivat-centar').classList.contains('teg-search__activated') &&
    document.getElementById('lastva').classList.contains('teg-search__activated')) {
      document.getElementById('tivat-interior-locations').classList.add('teg-search__activated')
  }
}

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
  TivatinteriorLocationsCheck();
  allLocationsCheck();
}

function initAllTivatLocationsTegs() {
  if (document.getElementById('tivat-interior-locations').classList.contains('teg-search__activated')) {
    document.getElementById('tivat-interior-locations').classList.remove('teg-search__activated');
    document.getElementById('tivat-interior-locations').classList.add('teg-search__disactivated');
    document.getElementById('tivat-centar').classList.remove('teg-search__activated');
    document.getElementById('lastva').classList.remove('teg-search__activated');
    document.getElementById('tivat-count').innerHTML = '';
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

function BudvainteriorLocationsCheck() {
  if (document.getElementById('budva-centar').classList.contains('teg-search__activated') &&
    document.getElementById('becici').classList.contains('teg-search__activated')) {
      document.getElementById('budva-interior-locations').classList.add('teg-search__activated')
  }
}

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
  BudvainteriorLocationsCheck();
  allLocationsCheck();
}

function initAllBudvaLocationsTegs() {
  if (document.getElementById('budva-interior-locations').classList.contains('teg-search__activated')) {
    document.getElementById('budva-interior-locations').classList.remove('teg-search__activated');
    document.getElementById('budva-interior-locations').classList.add('teg-search__disactivated');
    document.getElementById('budva-centar').classList.remove('teg-search__activated');
    document.getElementById('becici').classList.remove('teg-search__activated');
    document.getElementById('budva-count').innerHTML = '';
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
