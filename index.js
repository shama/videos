var Video = require('bel-video-element')
var bel = require('bel')

function render () {
  var opts = {
    poster: 'sources/rides.png',
    mp4Src: 'sources/rides.mp4'
  }
  return bel`${Video(opts)}`
}

var app = render()

document.querySelector('main').appendChild(app)
