const acordeonLanguage =  document.querySelectorAll('.acordeon .language')

acordeonLanguage.forEach((language) => {
    language.addEventListener('click', (e) => {
        const acordeon = language.parentElement
        const isOpen = acordeon.classList.contains('open')

        if (isOpen) {
            acordeon.classList.remove('open')
        } else {
            acordeon.classList.add('open')
        }
    })
})