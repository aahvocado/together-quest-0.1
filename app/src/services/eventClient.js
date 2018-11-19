import SocketClient from 'components/SocketClient';

// connect to websocket server
const client = new SocketClient({
  url: 'http://localhost:1111',
});

const socket = client.socket;
/**
 * generic connect
 */
socket.on('connect', () => {
  console.log('connected to websocket server!');
});
// /**
//  * another user completed the join process
//  */
// socket.on('joined', () => {
//   console.log('another user joined');
// });

socket.on('gameMasterData', (data) => {

});

export default client;
