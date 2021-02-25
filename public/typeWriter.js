const letters = document.querySelectorAll('.outputTable td'),
      alphabet = "abcdefghijklmnopqrstuvwxyz",
      inp = document.querySelectorAll('.codeIO')[0],
      oup = document.querySelectorAll('.codeIO')[1],
      typeRotors = document.querySelectorAll('.typeRotors');

inp.value = "";
oup.value = "";

function changeKeyColor(key, color)
{
  for (var i = 0; i < 26; i++)
  {
    if (letters[i].textContent == key)
      letters[i].style.backgroundColor = color;
  }
}

function shiftCharacter(key)
{
  const totalShift = parseInt(typeRotors[0].value) + parseInt(typeRotors[1].value) + parseInt(typeRotors[2].value);
  var num = 0;
  for (var i = 0; i < 26; i++)
  {
    if (alphabet[i] == key)
      num = i;
  }
  return alphabet[(num + totalShift) % 26];
}

function incrementRotors(num)
{
  var rotors = [parseInt(typeRotors[0].value),parseInt(typeRotors[1].value),parseInt(typeRotors[2].value)];
  rotors[2] += num;
  if (rotors[2] >= 27)
  {
    rotors[1]++;
    rotors[2] = 0;
    if (rotors[1] >= 27)
    {
      rotors[0]++;
      rotors[1] = 0;
      if (rotors[0] >= 27)
      {
        for (var i = 0; i < rotors.length; i++)
          rotors[i] = 0;
      }
    }
  }
  else if (rotors[2] <= -1)
  {
    rotors[1]--;
    rotors[2] = 26;
    if (rotors[1] <= -1)
    {
      rotors[0]--;
      rotors[1] = 26;
      if (rotors[0] <= -1)
      {
        for (var i = 0; i < rotors.length; i++)
          rotors[i] = 0;
      }
    }
  }

  for (var i = 0; i < typeRotors.length; i++)
    typeRotors[i].value = rotors[i];
}

inp.addEventListener('keydown', (x) => {
  if (x.key != 'Backspace')
  {
    if (shiftCharacter(x.key.toLowerCase()) == x.key)
    {
      incrementRotors(1);
    }
    var shiftedCharacter = shiftCharacter(x.key.toLowerCase());
    oup.value += shiftedCharacter;
    incrementRotors(1);
    changeKeyColor(shiftedCharacter.toUpperCase(), 'white');
    setTimeout(() => {changeKeyColor(shiftedCharacter.toUpperCase(), '')}, 300);
  }
  else
  {
    if (oup.value.length > 0)
      oup.value = oup.value.substr(0,oup.value.length - 1);
      incrementRotors(-1);
  }
});
