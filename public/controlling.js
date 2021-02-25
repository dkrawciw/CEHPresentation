const controlBtn = document.querySelectorAll('.contollerBtn'),
      edAll = document.querySelectorAll('.edAll'),
      socket = io();

edAll[0].addEventListener('click', () => {
  for (var i = 0; i < 3; i++)
    socket.emit('enable', i, true);
});
edAll[1].addEventListener('click', () => {
  for (var i = 0; i < 3; i++)
    socket.emit('enable', i, false);
});

controlBtn[0].addEventListener('click', () => {
  socket.emit('enable', 0, true);
  socket.emit('moveTab', '/enigma');
});
controlBtn[1].addEventListener('click', () => {
  socket.emit('moveTab', '/enigma#typeWriterLocation');
});
controlBtn[2].addEventListener('click', () => {
  socket.emit('enable', 1, true);
  socket.emit('moveTab', '/bombe');
});
controlBtn[3].addEventListener('click', () => {
  socket.emit('enable', 1, true);
  socket.emit('moveTab', '/bombe#shiftedDemo');
});
controlBtn[4].addEventListener('click', () => {
  socket.emit('enable', 1, true);
  socket.emit('moveTab', '/worksCited');
});
