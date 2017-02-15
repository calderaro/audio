
const audio = document.querySelector('audio')
const play = document.querySelector('#play')
const pause = document.querySelector('#pause')
const next = document.querySelector('#next')

play.addEventListener('click', () => {
  audio.src = '/static/estocolmo.mp3'
  audio.play()
})
pause.addEventListener('click', () => {
  audio.pause()
})
next.addEventListener('click', () => {
  audio.src = 'https://fonorva.blob.core.windows.net/preupload/FN08040010840_06.mp3'
  audio.play()
})

// https://fonorva.blob.core.windows.net/preupload/FN08040010840_06.mp3
