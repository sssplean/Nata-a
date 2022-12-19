function initSale() {
  if (document.getElementById('rent').classList.contains('teg-search__activated')) {
    document.getElementById('rent').classList.remove('teg-search__activated');
  }
  document.getElementById('sale').classList.add('teg-search__activated');
}
