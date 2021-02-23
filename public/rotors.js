const rotors = document.querySelectorAll('.rotorExample'),
      letterToShift = document.querySelector('#letterToShift');
      rotorAlphabet = "abcdefghijklmnopqrstuvwxyz";
var rotorVal = [0,0,0],
    intervalSpeed = 500;

function addRotor()
{
  rotorVal[2]++;
  if (rotorVal[2] >= 27)
  {
    rotorVal[1]++;
    rotorVal[2] = 0;
    if (rotorVal[1] >= 27)
    {
      rotorVal[0]++;
      rotorVal[1] = 0;
      if (rotorVal[0] >= 27)
      {
        for (var i = 0; i < rotors.length; i++)
          rotorVal[i] = 0;
      }
    }
  }
}

function printRotors()
{
  for (var i = 0; i < rotors.length; i++)
    rotors[i].textContent = rotorVal[i];
}

function shiftLetters(letter)
{
  const totalShift = (rotorVal[0] + rotorVal[1] + rotorVal[2]);
  var shiftedLetter = letter,
      letterLocation = 0;
  for (var i = 0; i < 27; i++)
  {
    if (letter == rotorAlphabet[i])
      letterLocation = i;
  }

  shiftedLetter = rotorAlphabet[(letterLocation + totalShift) % 26];

  if (shiftedLetter == letter)
  {
    addRotor();
    printRotors();
    return shiftLetters('a');
  }
  else
    return shiftedLetter;
}

setInterval(() => {
  addRotor();
  printRotors();
  letterToShift.textContent = shiftLetters('a');
}, intervalSpeed);
