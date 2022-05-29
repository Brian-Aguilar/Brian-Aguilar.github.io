const icons_dark = document.querySelectorAll('.dark-light .icon')
let os_theme = window.matchMedia("(prefers-color-scheme: dark)")

if (icons_dark) {
    let is_dark = os_theme.matches ? true : false
    if (is_dark == false) {
        icons_dark[1].classList.add('hidden')
        icons_dark[0].classList.remove('hidden')
        document.querySelector('body').classList.remove('dark-mode')
    } else {
        icons_dark[1].classList.remove('hidden')
        icons_dark[0].classList.add('hidden')
        document.querySelector('body').classList.add('dark-mode')
    }

    icons_dark.forEach(icon => {
        icon.addEventListener('click', (e) => {
            if (icon.classList.contains('dark')) {
                icons_dark[0].classList.add('hidden')
                icons_dark[1].classList.remove('hidden')
                document.querySelector('body').classList.add('dark-mode')

            }
            if (icon.classList.contains('light')) {
                icons_dark[1].classList.add('hidden')
                icons_dark[0].classList.remove('hidden')
                document.querySelector('body').classList.remove('dark-mode')
            }
        })
    })
}