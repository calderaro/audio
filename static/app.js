
const audio = document.querySelector('audio')
const play = document.querySelector('#play')
const pause = document.querySelector('#pause')
const name = document.querySelector('#name')
const error = document.querySelector('#error')
const tracks = [
  'FN08030054541_01.mp3',
  'FN08030054541_02_repared.mp3',
  'FN08030075478_03.mp3',
  'FN08030075478_03_repared.mp3',
  'FN12060044564_09.mp3',
  'FN12060044564_09_repared.mp3'
]
let count = 0

name.innerHTML = ''
error.style.color = 'red'

pause.addEventListener('click', () => audio.pause())
play.addEventListener('click', () => {
  if (count >= tracks.length -1) count = 0; else count++;
  load(tracks[count], audio, name)
})
audio.addEventListener('error', (e) => error.innerHTML = 'No se pudo decodificar')


function load (track, audio, name) {
  axios.get('/static/' + track)
  name.innerHTML = "cargando: " + track
  axios({
    method: 'get',
    url: '/static/' + track,
    responseType: 'blob',
    headers: {Accept:'audio/mpeg'}
  })
  .then((res) => {
    error.innerHTML = ''
    name.innerHTML = track
    audio.src = URL.createObjectURL(res.data)
    audio.play()
  })
  .catch((error) => {
    const x = error.response && error.response.status || error.status || 'network'
    const err = error.response && error.response.data || error.data
    if (x === 404) document.querySelector('#error').innerHTML = 'Archivo no encontrado'
    if (x === 500) document.querySelector('#error').innerHTML = 'Error de servidor'
  })
}
