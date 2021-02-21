const homeBtn = document.querySelector('#homeBtn'),
      eBtn = document.querySelector('#eBtn'),
      bBtn = document.querySelector('#bBtn'),
      socket = io();

homeBtn.addEventListener('click', () => {
  socket.emit('moveTab', '/');
});
eBtn.addEventListener('click', () => {
  socket.emit('moveTab', '/enigma');
});
bBtn.addEventListener('click', () => {
  socket.emit('moveTab', '/bombe');
});
