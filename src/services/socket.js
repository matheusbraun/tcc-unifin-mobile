import socketio from 'socket.io-client';

const socket = socketio('https://tcc-unifin.now.sh', {
  autoConnect: false,
});

function subscribeToNewPets(subcribeFunction) {
  socket.on('new-pet', subcribeFunction);
}

function connect({ latitude, longitude, specie, distance }) {
  socket.io.opts.query = {
    latitude,
    longitude,
    specie,
    distance,
  };

  socket.connect();
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
}

export { connect, disconnect, subscribeToNewPets };
