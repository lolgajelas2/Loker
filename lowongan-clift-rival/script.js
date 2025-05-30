document.getElementById('jobForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const jumpscare = document.getElementById('jumpscare');
  const scream = document.getElementById('scream');

  // Tampilkan jumpscare
  jumpscare.style.display = 'flex';
  scream.play();

  // Opsional: sembunyikan kembali atau redirect
  setTimeout(() => {
    jumpscare.style.display = 'none';
    // window.location.reload(); // jika ingin kembali ke awal
  }, 5000);
});
