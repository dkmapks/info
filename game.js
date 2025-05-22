// Global state
window.gameState = {
  pln: 2500,
  btc: 0,
  drugs: 0,
  storageMax: 50,
  heat: 0,
  heatIncreasePerGram: 0.05,
  heatDecreasePerGram: 0.03,
};

// Logger
window.gameLog = [];
function log(msg) {
  const now = new Date().toLocaleTimeString();
  window.gameLog.unshift(`[${now}] ${msg}`);
  const logDiv = document.getElementById('log');
  logDiv.innerHTML = window.gameLog.join('<br>');
}

// Clamp heat 0-100
function clampHeat() {
  if (window.gameState.heat < 0) window.gameState.heat = 0;
  if (window.gameState.heat > 100) window.gameState.heat = 100;
}

// Update status display
function updateStatus() {
  document.getElementById('pln').textContent = window.gameState.pln.toFixed(2);
  document.getElementById('btc').textContent = window.gameState.btc.toFixed(2);
  document.getElementById('drugs').textContent = window.gameState.drugs.toFixed(2);
  document.getElementById('storageUsed').textContent = window.gameState.drugs.toFixed(2);
  document.getElementById('storageMax').textContent = window.gameState.storageMax;
  document.getElementById('storageMaxDisplay').textContent = window.gameState.storageMax;
  document.getElementById('heatPercent').textContent = Math.floor(window.gameState.heat);
  document.getElementById('heatFill').style.width = Math.min(window.gameState.heat, 100) + '%';
}

// Init at start
updateStatus();
log('Witaj w NarcoEmpire!');
