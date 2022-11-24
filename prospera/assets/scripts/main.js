// Get selectors from DOM

let dropdown = document.querySelector("#dropdown");
let burger = document.querySelector("#burger");
let box = document.querySelector("#box");
let body = document.querySelector("body")
let vacancyNAmeHolder = document.querySelector(".vacancies")

// Vacancies mockdata for careers page.
let vacancies = [
  {
    id: 1,
    vacancyName: 'Front End Developer',
    vacancyLink: '/contact.html'
  },
  {
    id: 2,
    vacancyName: 'Back End Developer',
    vacancyLink: '/contact.html'
  },
  {
    id: 3,
    vacancyName: 'Software Engineer',
    vacancyLink: '/contact.html'
  }
]

// vacancies integration function
vacancies.forEach((item) => {

  // create HTML tags
  let li = document.createElement('li')
  let aEl = document.createElement('a')
  let heading = document.createElement('h2')

  // Set attributes for tags
  aEl.setAttribute('class', 'footer-button')
  aEl.setAttribute('href', `${item.vacancyLink}`)
  li.setAttribute('class', 'vacancy-holder')
  heading.setAttribute('class', 'primary-heading')

  heading.innerHTML = item.vacancyName
  aEl.innerHTML = 'Learn More'

  li.appendChild(heading)
  li.appendChild(aEl)

  vacancyNAmeHolder.appendChild(li)
})

// Create burger button for navbar on mobile device
burger.addEventListener("click", function (e) {
  this.classList.toggle("crossed")
  dropdown.classList.toggle("opened");
  box.classList.toggle("opened")
  body.classList.toggle("no-scroll")
})