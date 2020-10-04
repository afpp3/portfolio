function initScrollToSection() {
  const internalLinks = document.querySelectorAll('.nav-menu a[href^="#"]')

  if (internalLinks.length) {
    function goToSection() {
      this.preventDefault
      const href = this.getAttribute('href')
      const section = document.querySelector(href)
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'end'
      })
    }

    internalLinks.forEach(link => {
      link.addEventListener('click', goToSection)
    })
  }

}

initScrollToSection()


