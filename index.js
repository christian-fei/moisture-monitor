const five = require('johnny-five')
const Raspi = require('raspi-io').RaspiIO
const board = new five.Board({
  io: new Raspi()
})

board.on('ready', function () {
  console.log('board ready')
  const led = new five.Led('P1-13')
  led.blink()
})
