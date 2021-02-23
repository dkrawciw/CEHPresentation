const letters = document.querySelectorAll('.outputTable td'),
      alphabet = "abcdefghijklmnopqrstuvwxyz",
      inp = document.querySelector('.codeIO');

function changeKeyColor(key, color)
{
  for (var i = 0; i < 26; i++)
  {
    if (letters[i].textContent == key)
      letters[i].style.backgroundColor = color;
  }
}

inp.addEventListener('keydown', (x) => {
  changeKeyColor(x.key.toUpperCase(), 'white');
  setTimeout(() => {changeKeyColor(x.key.toUpperCase(), '')}, 300);
});
