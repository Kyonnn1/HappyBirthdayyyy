const bible = document.getElementById('bible');
const clickText = document.getElementById('clickText');

bible.addEventListener('click', (e) => {
  e.stopPropagation(); // agar klik di Bible tidak langsung trigger redirect

  if (!bible.classList.contains('open')) {
    bible.classList.add('open');

    // Ubah teks & animasi setelah buka
    clickText.textContent = "Click anywhere to continue";
    clickText.classList.add('blink');

    // Tambahkan event listener untuk klik di mana saja
    document.body.addEventListener('click', redirectAfterOpen);
  }
});

function redirectAfterOpen() {
  // Ganti halaman sesuai kebutuhan kamu
  window.location.href = "closing.html";
}