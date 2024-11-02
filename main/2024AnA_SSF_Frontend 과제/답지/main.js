let number = 7;
let numDisplay = document.getElementById('num');
numDisplay.textContent = number;

document.getElementById('moreinfo').addEventListener('click', function () {
  const detailsSection = document.getElementById('section');
  if (
    detailsSection.style.display === 'none' ||
    detailsSection.style.display === ''
  ) {
    detailsSection.style.display = 'block';
    this.textContent = '소개 닫기';
  } else {
    detailsSection.style.display = 'none';
    this.textContent = '소개 보기';
  }
});
