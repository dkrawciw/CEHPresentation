const socket = io();

socket.on('moveTab', (location) => {
  window.location = location;
});
