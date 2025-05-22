function upgradeStorage() {
  if (window.gameState.pln < 5000) {
    alert('Nie masz wystarczająco pieniędzy na ulepszenie magazynu.');
    return;
  }
  window.gameState.pln -= 5000;
  window.gameState.storageMax += 50;
  log('Magazyn ulepszony o 50g pojemności.');
  updateStatus();
}

document.getElementById('upgradeStorageBtn').addEventListener('click', upgradeStorage);
