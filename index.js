const five = require('johnny-five')
const Raspi = require('raspi-io').RaspiIO
const board = new five.Board({
  io: new Raspi()
})

board.on('ready', function () {
  console.log('board ready')
  var virtual = new five.Board.Virtual(new five.Expander('ADS1115'))

  try {
    const led = new five.Led(13)
    led.blink()
  } catch (err) {
    console.error('failed led', err.message)
  }

  try {
    const sensor = new five.Sensor({
      pin: 'A0',
      freq: 1000,
      threshold: 10,
      board: virtual
    })
    sensor.on('change', function () {
      console.log('sensor.value', sensor.value)
    })
  } catch (err) {
    console.error('failed moisture', err.message)
  }
})
