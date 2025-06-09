//= ../libs/swiper-bundle.min.js

const langToggleBtn = document.querySelector('.nav__option')
const langParent = document.querySelector('.nav__lang')
const burger = document.querySelector('.burger-menu')
const nav = document.querySelector('.nav__actions')

window.addEventListener('click', e => {
  if (langToggleBtn.contains(e.target)) {
    langParent.classList.toggle('active')
  } else if (!langParent.contains(e.target)) {
    langParent.classList.remove('active')
  }
})

window.addEventListener('click', e => {
  if (burger.contains(e.target)) {
    burger.classList.toggle('active')
    nav.classList.toggle('active')
  } else if (!nav.contains(e.target)) {
    burger.classList.remove('active')
    nav.classList.remove('active')
  }
})

const heroSwiper = new Swiper('.production__images', {
  effect: 'fade',
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  preloadImages: true,
  lazy: true,
  loop: true,
  slidesPerView: 1,
})

const productSwiper = new Swiper('.products__slider', {
  effect: 'fade',
  autoplay: {
    delay: 10000000,
    disableOnInteraction: false,
  },
  preloadImages: true,
  lazy: true,
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

// document.querySelector('.form').addEventListener('submit', async function (e) {
//   e.preventDefault()

//   const name = document.getElementById('name').value.trim()
//   const phone = document.getElementById('tel').value.trim()

//   const formData = new FormData()
//   formData.append('name', name)
//   formData.append('phone', phone)

//   try {
//     const response = await fetch('feedback.php', {
//       method: 'POST',
//       body: formData,
//     })

//     if (response.ok) {
//       const thankYouMessage = document.querySelector('.thank')
//       thankYouMessage.classList.add('active')

//       thankYouMessage.addEventListener('click', () =>
//         thankYouMessage.classList.remove('active'),
//       )

//       setTimeout(() => this.reset(), 2000);

//     } else {
//       thank__block.innerHTML = `<h2 class="thank__title"> Не удалось отправить заявку. Попробуйте позже. </h2>`
//     }
//   } catch (error) {
//     console.error('Ошибка:', error)
//   }
// })
