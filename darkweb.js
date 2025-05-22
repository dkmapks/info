function getDarkwebBuyPricePerGram(qty) {
  if (qty >= 501) return 10;
  if (qty >= 201) return 15;
  if (qty >= 101) return 20;
  if (qty >= 51) return 25;
  if (qty >= 21) return 30;
  if (qty >= 11) return 35;
  return 40;
}

function updateDarkwebBuyPrice() {
  const qty = parseInt(document.getElementById('dwBuyQty').value) || 1;
  let price = getDarkwebBuyPricePerGram(qty);
  document.getElementById('dwBuyPrice').textContent = price;
}

function darkwebBuy() {
  const qty = parseInt(document.getElementById('dwBuyQty').value);
  if (isNaN(qty) || qty <= 0) return alert('Nieprawidłowa ilość');
  if (qty + window.gameState.drugs > window.gameState.storageMax) return alert('Za mało miejsca w magazynie');
  const pricePerGram = getDarkwebBuyPricePerGram(qty);
  const totalPrice = pricePerGram * qty;
  if (window.gameState.pln < totalPrice) return alert('Nie masz tyle pieniędzy');
  window.gameState.pln -= totalPrice;
  window.gameState.drugs += qty;
  window.gameState.heat += qty * window.gameState.heatIncreasePerGram;
  clampHeat();
  log(`Kupiono ${qty}g narkotyków na Darkwebie za ${totalPrice.toFixed(2)} zł (${pricePerGram} zł/g). Heat wzrósł.`);
  updateStatus();
}

function darkwebSell() {
  const qty = parseInt(document.getElementById('dwSellQty').value);
  if (isNaN(qty) || qty <= 0) return alert('Nieprawidłowa ilość');
  if (qty > window.gameState.drugs) return alert('Nie masz tyle narkotyków');
  const pricePerGram = 50;
  const totalPrice = pricePerGram * qty;
  window.gameState.drugs -= qty;
  window.gameState.pln += totalPrice;
  window.gameState.heat -= qty * window.gameState.heatDecreasePerGram;
  clampHeat();
  log(`Sprzedano ${qty}g narkotyków na Darkwebie za ${totalPrice.toFixed(2)} zł (50 zł/g). Heat zmalał.`);
  updateStatus();
}

document.getElementById('dwBuyQty').addEventListener('input', updateDarkwebBuyPrice);
document.getElementById('dwBuyBtn').addEventListener('click', darkwebBuy);
document.getElementById('dwSellBtn').addEventListener('click', darkwebSell);
updateDarkwebBuyPrice();
