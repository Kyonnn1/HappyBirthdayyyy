window.addEventListener('load', () => {
    const lines = document.querySelectorAll('.ktp-line');
    lines.forEach((line, index) => {
      setTimeout(() => {
        line.classList.add('show');
      }, index * 200); // jeda antar baris, bisa diubah kecepatannya
    });
  });

document.addEventListener('click', () => {
  window.location.href = 'bible.html'; // Ganti dengan URL tujuanmu
});
