var Video = require('bel-video-element')
var bel = require('bel')

function render () {
  var opts = {
    width: '100%',
    poster: 'http://7xrtnk.com1.z0.glb.clouddn.com/rides-poster.png',
    mp4Src: 'http://7xrtnk.com1.z0.glb.clouddn.com/rides.mp4'
  }
  return bel`${Video(opts)}`
}

var app = render()

document.querySelector('main').appendChild(app)
