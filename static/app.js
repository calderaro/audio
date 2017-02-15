
const audio = document.querySelector('audio')
const play = document.querySelector('#play')
const pause = document.querySelector('#pause')
const next = document.querySelector('#next')
const next1 = document.querySelector('#next1')

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
next1.addEventListener('click', () => {
  audio.src = '/static/01.mp3'
  audio.play()
})

// https://fonorva.blob.core.windows.net/preupload/FN08040010840_06.mp3
