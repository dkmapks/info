const btcPrice = 50000;

function buyBTC() {
  if (window.gameState.pln < btcPrice) {
    alert('Nie masz tyle pieniędzy na kupno 1 BTC.');
    return;
  }
  window.gameState.pln -= btcPrice;
  window.gameState.btc += 1;
  log('Kupiono 1 BTC za 50 000 zł.');
  updateStatus();
}

function sellBTC() {
  if (window.gameState.btc < 1) {
    alert('Nie masz 1 BTC do sprzedaży.');
    return;
  }
  window.gameState.btc -= 1;
  window.gameState.pln += btcPrice;
  log('Sprzedano 1 BTC za 50 000 zł.');
  updateStatus();
}

document.getElementById('buyBTCBtn').addEventListener('click', buyBTC);
document.getElementById('sellBTCBtn').addEventListener('click', sellBTC);
