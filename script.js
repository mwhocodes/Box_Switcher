const testimonialContainer = document.querySelector('.testimonial-container')
const _photo = document.querySelector('img')
const _vocab = document.querySelector('.vocab')
const _pronunciation = document.querySelector('.pronunciation')
const _audio = document.querySelector('audio')

const testimonials = [
  {
    vocab: 'yellow',
    pronunciation: '/ˈjeləʊ/',
    photo: 'asset/image/1.jpg',
    audio: 'asset/audio/1.mp3'
  },
  {
    vocab: 'orange',
    pronunciation: '/ˈɔːrɪndʒ/',
    photo: 'asset/image/2.jpg',
    audio: 'asset/audio/2.mp3'
  },

  {
    vocab: 'purple',
    pronunciation: '/ˈpɜːrpl/',
    photo: 'asset/image/3.jpg',
    audio: 'asset/audio/3.mp3'
  },
  {
    vocab: 'green',
    pronunciation: '/ɡriːn/',
    photo: 'asset/image/4.jpg',
    audio: 'asset/audio/4.mp3'
  },
  {
    vocab: 'brown',
    pronunciation: '/braʊn/',
    photo: 'asset/image/5.jpg',
    audio: 'asset/audio/5.mp3'
  },
  {
    vocab: 'black',
    pronunciation: '/blæk/',
    photo: 'asset/image/6.jpg',
    audio: 'asset/audio/6.mp3'
  },
  {
    vocab: 'white',
    pronunciation: '/waɪt/',
    photo: 'asset/image/7.jpg',
    audio: 'asset/audio/7.mp3'
  },
  {
    vocab: 'gray',
    pronunciation: '/ɡreɪ/',
    photo: 'asset/image/8.jpg',
    audio: 'asset/audio/8.mp3'
  },
  {
    vocab: 'pink',
    pronunciation: '/pɪŋk/',
    photo: 'asset/image/9.jpg',
    audio: 'asset/audio/9.mp3'
  },
  {
    vocab: 'blue',
    pronunciation: '/bluː/',
    photo: 'asset/image/10.jpg',
    audio: 'asset/audio/10.mp3'
  },
  {
    vocab: 'red',
    pronunciation: '/red/',
    photo: 'asset/image/11.jpg',
    audio: 'asset/audio/11.mp3'
  },
  {
    vocab: 'silver',
    pronunciation: '/ˈsɪlvər/',
    photo: 'asset/image/12.jpg',
    audio: 'asset/audio/12.mp3'
  },
  {
    vocab: 'gold',
    pronunciation: '/ɡəʊld/',
    photo: 'asset/image/13.jpg',
    audio: 'asset/audio/13.mp3'
  }
]

let idx = 1

function updateTestimonial() {
  const {vocab, pronunciation, photo, audio} = testimonials[idx]

  _photo.src = photo
  _audio.src = audio
  _vocab.innerHTML = vocab
  _pronunciation.innerHTML = pronunciation

  idx++

  if (idx > photos.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)
